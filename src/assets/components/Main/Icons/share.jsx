import React from 'react';
import CopyIcon from '../../img/copy.svg';
import Email from '../../img/email.svg';
import Messages from '../../img/messages.svg';
import WhatsApp from '../../img/whatsapp.svg';
import Messenger from '../../img/messenger.svg';
import Facebook from '../../img/fb.svg';
import Twitter from '../../img/twitter.svg';
import MoreOptions from '../../img/more-options.svg';

const Share = ({ title, image, onClose }) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={onClose}>
        <div className="modal-content">
          <button className="cross" onClick={onClose}></button>
          <div className="share">Share this experience</div>
          <div className="info">
            <div className="info-image">
              <img src={image} alt="" height="60px" width="60px" />
            </div>
            <div className="info-title">{title}</div>
          </div>
          <div className="social">
            <div className="copy-div">
              <div className="copy-image">
                <img src={CopyIcon} alt="" height="24px" />
              </div>
              <div className="copy-text">Copy Link</div>
            </div>
            <div className="copy-div">
              <div className="copy-image">
                <img src={Email} alt="" height="24px" />
              </div>
              <div className="copy-text">Email</div>
            </div>
            <div className="copy-div">
              <div className="copy-image">
                <img src={Messages} alt="" height="24px" />
              </div>
              <div className="copy-text">Messages</div>
            </div>
            <div className="copy-div">
              <div className="copy-image">
                <img src={WhatsApp} alt="" height="24px" />
              </div>
              <div className="copy-text">WhatsApp</div>
            </div>
            <div className="copy-div">
              <div className="copy-image">
                <img src={Messenger} alt="" height="24px" />
              </div>
              <div className="copy-text">Messenger</div>
            </div>
            <div className="copy-div">
              <div className="copy-image">
                <img src={Facebook} alt="" height="24px" />
              </div>
              <div className="copy-text">Facebook</div>
            </div>
            <div className="copy-div">
              <div className="copy-image">
                <img src={Twitter} alt="" height="24px" />
              </div>
              <div className="copy-text">Twitter</div>
            </div>
            <div className="copy-div">
              <div className="copy-image">
                <img src={MoreOptions} alt="" height="24px" />
              </div>
              <div className="copy-text">More options</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
