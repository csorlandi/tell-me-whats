import copyImg from '../../assets/images/copy.svg';

import './style.scss';

export function RoomCode() {
  return (
    <button className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #-McynOYVmmVAHHa_fkSP</span>
    </button>
  )
}