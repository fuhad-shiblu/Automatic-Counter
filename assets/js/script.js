let fuhadShiblu_counter = document.querySelectorAll('.fuhadShiblu_counter')

let fuhadShiblu_arr = Array.from(fuhadShiblu_counter)

fuhadShiblu_arr.map((fuhadShiblu_item)=>{
     let i = 0
     let fuhadShiblu_count = ()=>{
          i++
          fuhadShiblu_item.innerHTML = i
          if(i == fuhadShiblu_item.dataset.numcount){
               clearInterval(fuhadShiblu_letstop)
          }
     }
     let fuhadShiblu_letstop = setInterval(()=>{
          fuhadShiblu_count()
     },100 / fuhadShiblu_item.dataset.numcount)
})