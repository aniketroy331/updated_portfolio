document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.experience-card');
    setTimeout(() => {
        card.classList.add('visible');
    }, 200);
    const viewMoreBtn = document.querySelector('.view-more');
    viewMoreBtn.addEventListener('click', function() {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0) rotateX(0)';
    });
});




// Certificate data - supports both images and PDFs
const certificates = {
    "Vraio Software Solution Pvt. Ltd.": [
        {
            url: "/images/internship/kpsc.png",
            type: "image"
        },
        {
            url: "/images/internship/internship_img.jpg",
            type: "image" 
        },
        {
            url: "/images/internship/internship.pdf",
            type: "pdf" 
        }
    ],
};
const modal = document.getElementById('certificateModal');
const imageViewer = document.getElementById('certificateImage');
const pdfViewer = document.getElementById('certificatePdf');
const closeModal = document.querySelector('.close-modal');
const prevBtn = document.querySelector('.prev-cert');
const nextBtn = document.querySelector('.next-cert');
const certCounter = document.querySelector('.cert-counter');

let currentCertIndex = 0;
let currentCompany = '';
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function() {
        const companyName = this.closest('.experience-card').querySelector('.company-name').textContent.trim();
        currentCompany = companyName;
        
        if (certificates[companyName] && certificates[companyName].length > 0) {
            currentCertIndex = 0;
            loadCertificate();
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        } else {
            alert("No certificates available for this position.");
        }
    });
});

function loadCertificate() {
    const cert = certificates[currentCompany][currentCertIndex];
    imageViewer.style.display = "none";
    pdfViewer.style.display = "none";
    
    if (cert.type === "image") {
        imageViewer.src = cert.url;
        imageViewer.style.display = "block";
        imageViewer.alt = "Certificate Image";
    } else if (cert.type === "pdf") {
        pdfViewer.src = cert.url;
        pdfViewer.style.display = "block";
    }
    
    updateControls();
}

function updateControls() {
    const certs = certificates[currentCompany];
    certCounter.textContent = `${currentCertIndex + 1}/${certs.length}`;
    prevBtn.disabled = currentCertIndex === 0;
    nextBtn.disabled = currentCertIndex === certs.length - 1;
}
prevBtn.addEventListener('click', () => {
    if (currentCertIndex > 0) {
        currentCertIndex--;
        loadCertificate();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentCertIndex < certificates[currentCompany].length - 1) {
        currentCertIndex++;
        loadCertificate();
    }
});
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
document.addEventListener('keydown', (e) => {
    if (modal.style.display === "block") {
        switch(e.key) {
            case "ArrowLeft":
                if (!prevBtn.disabled) prevBtn.click();
                break;
            case "ArrowRight":
                if (!nextBtn.disabled) nextBtn.click();
                break;
            case "Escape":
                closeModal.click();
                break;
        }
    }
});