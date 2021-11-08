import React from 'react';
import { Button, Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';
import ProfileAvatar from '../../ProfileAvatar';

const ProfileInfoBtnModal = ({ profile, children, ...btnProps }) => {
  const { avatar, createdAt, name, uid } = profile;
  const shortName = name.split(' ')[0];
  const { isOpen, open, close } = useModalState();
  const memberSince = new Date(createdAt).toLocaleDateString('fr-FR');
  return (
    <>
      <Button {...btnProps} onClick={open}>
        <span className="ml-2">{shortName}</span>
      </Button>

      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{shortName} profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-3 text-center mb-2">
            <ProfileAvatar
              src={avatar}
              name={name}
              className="width-200 height-200 img-fullsize font-huge"
            />
            <h4 className="mt-2">{name} profile</h4>
            <p className="text-center">Member since {memberSince}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {children}
          <Button block onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileInfoBtnModal;
