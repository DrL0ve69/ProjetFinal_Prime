// 1. Objet Membre déclaré avec une variable
let id = 1;
var objetMembre =
    {
        id : id++,
        nom: document.getElementById("nomFormulaireAccueil").value,
        prenom: document.getElementById("prenomFormulaireAccueil").value,
        email: document.getElementById("emailFormulaireAccueil").value,
        nomUtilisateur: document.getElementById("nouveauNomUtilisateurFormulaireAccueil").value,
        password : document.getElementById("passwordFormulaireAccueil").value,
        ToString: function ()
        {
            return `${this.id}. ${this.nom}, ${this.prenom} :\n 
                Adresse courriel : ${this.email}\n 
                Nom utilisateur : ${this.nomUtilisateur}\n
                Votre avatar : ${this.ImgAvatar}\n`;
        },
    };

// 2. Objet Membre avec constructeur
class Membre
{
    static id = 1;
    constructor(nom, prenom, email, nomUtilisateur, imgAvatar, password)
    {
        this.Nom = nom;
        this.Prenom = prenom;
        this.Email = email;
        this.NomUtilisateur = nomUtilisateur;
        this.ImgAvatar = imgAvatar;
        this.Password = password;
        this.Id = Membre.id;
        Membre.id++;
    }
    ToString(){
        return `${this.Id}. ${this.Nom}, ${this.Prenom} :\n 
                Adresse courriel : ${this.Email}\n 
                Nom utilisateur : ${this.NomUtilisateur}\n
                Votre avatar : ${this.ImgAvatar}\n`;
    }
}
let membre8 = new Membre("","", "", "", "", "");
let membre7 = new Membre("","", "", "", "", "");
let membre6 = new Membre("","","", "", "", "");
let membre5 = new Membre("","","", "", "", "");
console.log(membre5.Id, membre5.ToString(),Membre.id);
console.log(membre6.Id, membre6.ToString(),Membre.id);
console.log(membre7.Id, membre7.ToString(),Membre.id);
console.log(membre8.Id, membre8.ToString(),Membre.id);
console.log(objetMembre); console.log(objetMembre.ToString());
console.log(objetMembre.id); console.log(id)

