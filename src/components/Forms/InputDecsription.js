import React, { useState } from 'react';
import Post from '../../Post';

const InputDescription = () => {
  const [Description, setDescription] = useState('');
  Post.office.description = Description;
  return (
    <div>
      <form>
        <label>
          <textarea value={Description} onChange={event => setDescription(event.target.value)} className="DescriptionPost" />
        </label>
      </form>
    </div>
  )
}

export default InputDescription;
