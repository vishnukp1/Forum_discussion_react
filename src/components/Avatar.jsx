const Avatar = ({ src, alt, containerClassName, imgClassName ,aos}) => {
    return (
      <div className={containerClassName}  data-aos={aos}>
        <img src={src} alt={alt} className={`w-44 h-44 rounded-full ${imgClassName}`} />
      </div>
    );
  };
  
  export default Avatar;