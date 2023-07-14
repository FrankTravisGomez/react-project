import React from 'react';

function ProfileCard({ title, handle, image, description, link }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="title is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>

            {link && (
                <div className="card-footer">
                    <a href={link}>Visit Profile</a>
                </div>
            )}
        </div>
    );
}

export default ProfileCard;