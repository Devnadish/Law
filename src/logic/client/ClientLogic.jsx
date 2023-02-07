import supabase from "./database/supabase";


export const addNoteCounter=async (clientId)=>{
    const { error } = await supabase.from('clients').update({ has_comment : 1 }).eq("id", clientId)
}

