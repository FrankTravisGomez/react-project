function ProfileCard({title, handle, image}){
    return (
        <div>
            <img src={image}/>
            <div>Title id {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;