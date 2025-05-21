// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xcuhhzizdnknuswaouha.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjdWhoeml6ZG5rbnVzd2FvdWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NTc0MjYsImV4cCI6MjA2MzQzMzQyNn0._dt5iMfMVEbTu-iKnu5d7RgFmY0iVXBqkY99g18yp4Y';
export const supabase = createClient(supabaseUrl, supabaseKey);