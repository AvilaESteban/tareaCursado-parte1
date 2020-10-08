// carpeta donde guardamos imagen , archivos o datos que necesitamos 

export const paises = ['ae', 'ar', 'at' ,'au', 'be' ,'bg' ,'br' ,'ca', 'ch', 'cn' ,'co', 'cu', 'cz', 'de' ,'eg' ,'fr' ,'gb' ,'gr', 'hk', 'hu', 'id' ,'ie' ,'il' ,'in', 'it', 'jp' ,'kr' ,'lt' ,'lv' ,'ma' ,'mx' ,'my' ,'ng' ,'nl' ,'no', 'nz' ,'ph' ,'pl', 'pt' ,'ro' ,'rs', 'ru' ,'sa' ,'se' ,'sg' ,'si' ,'sk' ,'th' ,'tr' ,'tw' ,'ua', 'us' ,'ve' ,'za']
export const categorias = ['business','entertainment','general','health','science', 'sports','technology'];
export const getApiUrl = categoria =>`https://newsapi.org/v2/top-headlines?category=${categoria}&country=ar&apiKey=b2864c4480694465807cf194c30fed04`;

