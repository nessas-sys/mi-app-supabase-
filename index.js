import { createClient } from '@supabase/supabase-js' 
const supabaseUrl = 'https://goduneekbupsfefidjqv.supabase.co'
const supabaseKey = 'sb_publishable_BjRgXiWPhwjdaJ72sCLu2A_j_mSvvWE' 
const supabase = createClient(supabaseUrl, supabaseKey) 
async function obtenerEstudiantes() { 
const { data, error } = await supabase 
.from('Estudiantes') 
.select('*') 
if (error) { 
console.log('Error:', error) 
} else { 
console.log('Datos:', data) 
} 
} 
obtenerEstudiantes()
