const data = {
    trachea: {
        name: "Trachea",
        image: "https://img.freepik.com/premium-photo/human-trachea-anatomy-3d-illustration_130714-1869.jpg",
        desc: "The trachea (windpipe) carries air from the nose and mouth to the lungs."
    },
    lungs: {
        name: "Lungs",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Lungs_diagram_detailed.svg",
        desc: "The lungs are spongy organs where oxygen enters the blood and carbon dioxide is removed."
    },
    bronchi: {
        name: "Bronchi",
        image: "https://c8.alamy.com/comp/DA5WBF/digital-medical-illustration-depicting-the-bronchi-and-trachea-of-DA5WBF.jpg",
        desc: "Bronchi are branches of the trachea that conduct air into each lung."
    },
    alveoli: {
        name: "Alveoli",
        image: "https://st.focusedcollection.com/13422768/i/650/focused_169530678-stock-photo-human-alveoli-anatomy.jpg",
        desc: "Alveoli are tiny air sacs where the exchange of oxygen and carbon dioxide occurs."
    },
    diaphragm: {
        name: "Diaphragm",
        image: "https://c8.alamy.com/comp/2RB7THG/human-diaphragm-anatomy-for-medical-concept-3d-illustration-2RB7THG.jpg",
        desc: "The diaphragm is a muscle that helps in breathing by changing the volume of the chest cavity."
    }
};

const partName = document.getElementById("partName");
const partImage = document.getElementById("partImage");
const partDesc = document.getElementById("partDesc");

document.querySelectorAll(".hotspot").forEach(hotspot => {
    hotspot.addEventListener("click", () => {
        const part = hotspot.dataset.part;
        partName.innerText = data[part].name;
        partImage.src = data[part].image;
        partDesc.innerText = data[part].desc;
    });
});
