import React from 'react';


export default function MediaPresentation(media) {


  return (
    <div>
      <div className="columns level">

        <div className="column">
          <div>
            <table className="table">
              <tbody>
                <tr>
                  <td><figure><img alt="running woman" src="https://d193o8p26ehxdy.cloudfront.net/img-thumbs/960w/RKCOZX0VN8.jpg"></img></figure></td>
                </tr>
                <tr>I love to run.</tr>
                <tr>
                  <td><figure><img alt="new shoes" src="https://d193o8p26ehxdy.cloudfront.net/img-thumbs/960w/RUFNMXXX2F.jpg"></img></figure></td>
                </tr>
                <tr>New shoes.</tr>
                <tr>
                  <td><figure><img alt="big game" src="https://d193o8p26ehxdy.cloudfront.net/img-thumbs/960w/CTKY2SVZM8.jpg"></img></figure></td>
                </tr>
                <tr>The big game.</tr>
                <tr>
                  <td><figure><img alt="track and field days" src="https://d193o8p26ehxdy.cloudfront.net/img-thumbs/960w/5WKVKGI5DU.jpg"></img></figure></td>
                </tr>
                <tr>Track and Field Days.</tr>
                <tr>
                  <td><figure><img alt={media.description} src={media.videoUrl}></img></figure></td>
                </tr>
                <tr>{media.description}</tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}