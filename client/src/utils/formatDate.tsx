function formatDate(date: string | Date): string {
    const d = new Date(date); 
  
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
  
    let hours = d.getHours(); 
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM'; 
    hours = hours % 12; 
    hours = hours ? hours : 12; 
  
    return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
}

export default formatDate;