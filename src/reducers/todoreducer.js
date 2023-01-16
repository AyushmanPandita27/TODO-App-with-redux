const initialData={
    list:[]
}


const TodoReducer =(state=initialData, action)=>{
   
    switch(action.type){
        case "ADD_TODO":
            const {id, data}= action.payload;
            return {
                ...state,
                list : [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
          
            case "DELETE_TODO":
            const newList = state.list.filter((itr)=>itr.id !== action.id);   
           return {
            ...state,
            list:newList
           }

           case "CLEAR_TODO":
            return {
               list:[]
            }

            default: return state;
    }
}

export default TodoReducer;