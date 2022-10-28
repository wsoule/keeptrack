import { FC, SyntheticEvent } from 'react';
import { Project } from './Project';

interface ProjectFormProps {
  onCancel: () => void;
  onSave: (project: Project) => void;
}

export const ProjectForm: FC<ProjectFormProps> = ({ onCancel, onSave }) => {
  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    onSave(new Project({ name: 'Updated Project' }));
  };
  return (

    <form className='input-group vertical'
      onSubmit={handleSubmit}
    >
      <label htmlFor='name'>Project Name</label>
      <input type='text' name='name' placeholder='enter name' />
      <label htmlFor='description'>Project Description</label>

      <textarea name='description' placeholder='enter description'></textarea>
      <label htmlFor='budget'>Project Budget</label>

      <input type='number' name='budget' placeholder='enter budget' />
      <label htmlFor='isActive'>Active?</label>
      <input type='checkbox' name='isActive' />

      <div className='input-group'>
        <button className='primary bordered medium'>Save</button>
        <span />
        <button type='button' className='bordered medium' onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};
