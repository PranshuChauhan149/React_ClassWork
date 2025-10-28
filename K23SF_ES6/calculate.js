

export const cal = (a,b,o)=>{
  if(o==='+'){
    return a+b;
  }
  else if(o==='-'){
    return a-b;
  }
  else if(o==='*'){
    return a*b;
  }
  else if(o==='/'){
    return a/b;
  }else{
    return "Invalid op";
  }
} 