import { useNavigate } from 'react-router-dom';
import './css/AlphabetIndex.css'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function AlphabetIndex() {

  const navigate = useNavigate();

  return (
    <div>

      <div className='abcBox'>

        {letters.map(letter => (
          <div key={letter} className="alphabetsIndex">

            <img className="lettersIndex" src={`./images/${letter}.svg`} alt="images" onClick={() => navigate(`/alphabets/${letter}`)} />

          </div>
        ))}

      </div>

    </div>
  )// return
} // AlphabetIndex

export default AlphabetIndex;