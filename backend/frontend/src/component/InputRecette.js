import React from 'react' 
import classnames from 'classnames'
import "./css.css"


function InputRecette({label,type,name,_id,value, onChangeHandler, errors}) {
  return (
    <div>  
       
            <div class="new_user">
                <div class="form-group">
                     <label for="Email" class="text-light">{label}</label> 
                     <div class="couleur">

                     <input type={type} name={name} value={value} onChange={onChangeHandler}  /> 
                     </div>
                   
                </div>     
            </div> 
      
    </div>
  )
}

export default InputRecette ;