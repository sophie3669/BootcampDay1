module.exports ={
aritgeo: (arr) =>{  
  if (arr.length < 1){    
      return 0;    
    } 
    else {     
      const ari = arr[1] - arr[0]; 
      const geo = arr[1] / arr[0];    
      
      let arithmetric = true;         
      let geometric = true;
      
      for (let i=0; i < arr.length-1; i++){   
        if(arr[i+1] - arr[i] != ari)         
        arithmetric = false;       
        if (arr[i+1] / arr[i] != geo)        
        geometric = false;         
        }           
      if (arithmetric === true){   
        return 'arithmetric';        
        }         
        if (geometric === true){       
          
          return 'geometric'        
          }   
          if(arithmetric === false && geometric === false){  
            return -1     
            
          }      
      
    } 
   
 }
}
 