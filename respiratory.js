const data = {

    nostril:{
        name: "Nostril",
        image: "https://img.freepik.com/premium-photo/comprehensive-anatomical-illustrations-human-nose-nasal-structure_984027-201762.jpg",
        desc: "The trachea (windpipe) carries air from the nose and mouth to the lungs."
    },

        nasalCavity:{
        name: "Nasal Cavity",
        image: "https://media.sciencephoto.com/image/f0164882/800wm/F0164882-Human_nasal_cavity,_illustration.jpg",
        desc: "The trachea (windpipe) carries air from the nose and mouth to the lungs."
    },

        pharynx:{
        name: "Pharynx",
        image: "https://as2.ftcdn.net/v2/jpg/05/75/74/51/1000_F_575745121_3bzwHyLlCFvFhfXmcreJWoy6nAOO2zIm.jpg",
        desc: "The trachea (windpipe) carries air from the nose and mouth to the lungs."
    },

        larynx:{
        name: "Larynx",
        image: "https://as1.ftcdn.net/v2/jpg/05/18/24/54/1000_F_518245446_jCEP0A91qcKUs2SXkLRAOpzRtVcfoala.jpg",
        desc: "The trachea (windpipe) carries air from the nose and mouth to the lungs."
    },

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
