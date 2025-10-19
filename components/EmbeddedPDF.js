// EmbeddedPDF Component
// Reusable component for embedding PDFs with consistent styling
class EmbeddedPDF {
    constructor(options = {}) {
        this.src = options.src || '';
        this.title = options.title || 'PDF Document';
        this.height = options.height || '480px';
        this.width = options.width || '100%';
        this.containerId = options.containerId || `pdf-container-${Date.now()}`;
        this.autoScroll = options.autoScroll || false;
        this.scrollSpeed = options.scrollSpeed || 30;
        this.onError = options.onError || null;
        this.onLoad = options.onLoad || null;
    }

    // Create the PDF container HTML
    createContainer() {
        return `
            <div class="pdf-viewer-container" style="height: ${this.height}; width: ${this.width}; background: #f8f9fa; border-radius: 8px; overflow: hidden; border: 0;">
                <iframe 
                    src="${this.src}" 
                    class="pdf-viewer"
                    title="${this.title}"
                    aria-label="${this.title} PDF Viewer"
                    type="application/pdf"
                    style="width: 100%; height: 100%; border: 0;"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    onload="this.style.pointerEvents='auto';">
                </iframe>
                <div class="pdf-error-message" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; color: #6b7280; background: #f3f4f6;">
                    <p>PDF 無法載入，請點擊下方按鈕查看</p>
                </div>
            </div>
        `;
    }

    // Render the component into a container
    render(container) {
        if (typeof container === 'string') {
            container = document.getElementById(container);
        }
        if (container) {
            container.innerHTML = this.createContainer();
            this.attachEventListeners(container);
        }
    }

    // Attach event listeners
    attachEventListeners(container) {
        const iframe = container.querySelector('iframe');
        if (iframe) {
            iframe.addEventListener('load', () => {
                if (this.onLoad) this.onLoad();
                if (this.autoScroll) {
                    this.startAutoScroll(iframe);
                }
            });
            iframe.addEventListener('error', () => {
                if (this.onError) this.onError();
            });
        }
    }

    // Start auto scroll for PDF content
    startAutoScroll(iframe) {
        setTimeout(() => {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                if (iframeDoc) {
                    let scrollPosition = 0;
                    const scrollInterval = setInterval(() => {
                        if (iframeDoc.body) {
                            scrollPosition += 1;
                            iframeDoc.documentElement.scrollTop = scrollPosition;
                            
                            // Stop scrolling when reaching the bottom
                            if (scrollPosition >= iframeDoc.documentElement.scrollHeight - iframeDoc.documentElement.clientHeight) {
                                clearInterval(scrollInterval);
                                // Restart from top after a pause
                                setTimeout(() => {
                                    scrollPosition = 0;
                                    this.startAutoScroll(iframe);
                                }, 3000);
                            }
                        }
                    }, this.scrollSpeed);
                }
            } catch (error) {
                console.log('Auto scroll not available due to cross-origin restrictions');
            }
        }, 2000);
    }

    // Create modal version
    createModal() {
        return `
            <div id="pdfModal" class="pdf-modal" style="display: none; position: fixed; inset: 0; z-index: 50; background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(4px);">
                <div style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; padding: 1rem;">
                    <div style="background: white; border-radius: 12px; width: 100%; max-width: 6xl; height: 5/6; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
                        <button 
                            onclick="closePdfModal()"
                            style="position: absolute; top: 1rem; right: 1rem; z-index: 10; background: rgba(0, 0, 0, 0.5); color: white; border-radius: 50%; width: 2.5rem; height: 2.5rem; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; border: none; cursor: pointer;"
                            aria-label="Close PDF viewer">
                            ×
                        </button>
                        <iframe id="pdfFrame" src="" style="width: 100%; height: 100%; border: 0;"></iframe>
                    </div>
                </div>
            </div>
        `;
    }
}

// Global functions for modal functionality
window.openPdfModal = function(pdfSrc) {
    console.log('Opening PDF:', pdfSrc);
    const modal = document.getElementById('pdfModal');
    const frame = document.getElementById('pdfFrame');
    if (modal && frame) {
        frame.src = pdfSrc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

window.closePdfModal = function() {
    const modal = document.getElementById('pdfModal');
    const frame = document.getElementById('pdfFrame');
    if (modal && frame) {
        modal.style.display = 'none';
        frame.src = '';
        document.body.style.overflow = 'auto';
    }
};

// Auto-close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('pdfModal');
    if (event.target === modal) {
        closePdfModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePdfModal();
    }
});

// CSS for PDF viewers
const pdfStyles = `
<style>
.pdf-viewer::-webkit-scrollbar {
    display: none;
}
.pdf-viewer {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', pdfStyles);

