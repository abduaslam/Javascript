let  prodects =prompt("enter your prodect electronic,clothing,food"); 

switch( prodects){
    case "electronic":
    let electronic=prompt("computer, phone ,screen");
    switch (electronic){
        case "computer":
            console.log("the price is = "+10000)
            break;

            case "phone":
                console.log("the price is =" + 7000)
                break;

                  case "screen":
                console.log("the price is =" + 9000)
                break;
                default:
                    console.log("not found")

                
    }
    break;

       case "electronic":
    let clothing=prompt("men, woman ,kids");
    switch (clothing){
        case "men":
            console.log("the price is = "+15000)
            break;

            case "woman":
                console.log("the price is =" + 71000)
                break;

                  case "kids":
                console.log("the price is =" + 23000)
                break;
                default:
                    console.log("not found")

                
    }
    break;


       
       case "food":
    let foods=prompt("pizza, meat ,beens");
    switch (foods){
        case "pizza":
            console.log("the price is = "+15000)
            break;

            case "meat":
                console.log("the price is =" + 71000)
                break;

                  case "beenz":
                console.log("the price is =" + 23000)
                break;
                default:
                    console.log("not found")

                
    }
    break
    
    default:
        console.log("the prodect not found")

}
