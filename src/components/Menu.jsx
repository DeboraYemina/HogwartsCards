
import './Menu.css';
import snitch from '../media/images/snitch.png';
import audio from '../media/audio/harry-potter.mp3';

function Menu() {
  return (
    <div className="top-inicio">
      <h1>Cartas de Hogwarts</h1>
      <img src={snitch} alt="" className="animacion" />
      <audio autoPlay>
        <source src={audio} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  );
}

export default Menu;