

const message= $("#message");
const author= $("#author");
const images= $("#images");

let random_index= Math.floor(Math.random()*4);

const images_path=[

    "/images/Patrick Miller.png",
    "/images/AndrewSanchez.jpg",
    "/images/Tomas.jpg",
    "/images/MichaelRoberts.jpg"
    
]





function Update(){

    images.prop('src', images_path[random_index]);
    if(random_index==1){
        
        message.text("From start to finish, the service was top-notch. I wholeheartedly recommend them.");
        author.text("Andrew Sanchez");

    }

    if(random_index==2){
        message.text("I’m thrilled with the results! Their expertise and attention to detail truly set them apart.");
        author.text("Tomas");
    }
    if(random_index==3){
        message.text("Professional, reliable, and always attentive to my needs—couldn't have asked for better!.");
        author.text("Micheal");
    }
    
    
    
}


setTimeout(Update, 3000);
    

    




