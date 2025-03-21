import { useTranslation } from 'react-i18next';
import searchIcon from '../../assets/icons/search.svg';

const Search = () => {
  const { t } = useTranslation();
  
  return (
    <div className='bg-white w-xl px-4 py-2 rounded-sm flex drop-shadow-md'>
        <input 
            type='text' 
            className='w-full outline-none' 
            placeholder={t('search.placeholder')}
        />
        <img src={searchIcon} alt="Search Icon" className='w-4' />
    </div>
  )
}

export default Search;