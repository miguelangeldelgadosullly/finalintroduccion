import { Injectable } from '@angular/core';
import {art} from './art-details/art.model'
@Injectable({
  providedIn: 'root'
})
export class ArtsService {

  constructor() { }
  public arts:   art[] = [{
    id:'1',
    tittle:'Goblos',
    ImageURL:'https://m.media-amazon.com/images/I/61neru4pxyL._AC_SY450_.jpg',
    precio:'PRECIO: 5.99',
    desc:''
    
    
    
    },
    {
    id:'2',
    tittle:'Confeti',
    ImageURL:'https://i.pinimg.com/originals/20/4e/1a/204e1acfe0f1c211840201a8b2aa7870.jpg'
    ,precio:'PRECIO: 1.99',
    desc:''
    
    },{
      id:'3',
      tittle:'Pasteles',
      ImageURL:'data:image/jpeg;base64,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',
      precio:'PRECIO: 19.99',
      desc:''
      
      
      
      },{
        id:'4',
        tittle:'globos en forma de numeros',
        ImageURL:'https://m.media-amazon.com/images/I/815yFAlvTNL._AC_SX425_.jpg',
        precio:'PRECIO: 3.99',
        desc:''
        
        
        
        },{
          id:'5',
          tittle:'Blobos en forma de letra',
          ImageURL:'https://m.media-amazon.com/images/I/71ZBT8BQftS._AC_SS450_.jpg',
          precio:'PRECIO: 3.99',
          desc:''
          
          
          
          },{
            id:'6',
            tittle:'Bandeja de madera',
            ImageURL:'data:image/jpeg;base64,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',
            precio:'PRECIO:4.99',
            desc:''
            
            
            
            },{
              id:'7',
              tittle:'Cintas de colores',
              ImageURL:'https://m.media-amazon.com/images/I/81xyCt6SpTL._AC_SX425_.jpg',
              precio:'PRECIO: 6.49',
              desc:''
              
              
              
              },{
                id:'8',
                tittle:'Cortinas',
                ImageURL:'https://momentosdeco.com/1674-superlarge_default/cortina-plastico-metalizada-sempertex.jpg',
                precio:'PRECIO: 1.99',
                desc:''
                
                
                
                },{
                  id:'9',
                  tittle:'Silicon',
                  ImageURL:'https://superpaco.com/web/image/product.template/4116/image',
                  precio:'PRECIO: 0.99',
                  desc:''
                  
                  
                  
                  },{
                    id:'10',
                    tittle:'papel triturado',
                    ImageURL:'https://sc04.alicdn.com/kf/HTB1IhJFaIfrK1Rjy0Fmq6xhEXXaF.jpg',
                    precio:'PRECIO: 1.99',
                    desc:''
                    
                    
                    
                    },
    ]


  addArt(tittle, ImageURL, precio, desc){
    
    this.arts.push({
tittle,
ImageURL,
precio,
desc,
id: this.arts.length+1+""


    });
    
    
    }
    
    deleteArt(artid){
      this.arts.filter(art=>{

return art.id !== artid

      });
    
    
    }
    
  
    
    getArts(){
    return[...this.arts]
    
    
    
    }
    getArt(artid:string){
      return{
    ...this.arts.find(art=>{
return art.id === artid


    })
  }
    
    
    }
    
}
