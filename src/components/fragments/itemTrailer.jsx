


export default function itemTrailer(trailer) {
    const { id,key,type,name,site } = trailer.trailer;
   

    
    return (
      
        <iframe 
        width="100%" 
        height="100%" 
        src={`https://www.youtube-nocookie.com/embed/${key}`}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer;
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowFullScreen>
        </iframe>
       
    );

}