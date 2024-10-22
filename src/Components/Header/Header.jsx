import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-7xl mx-auto border-b-2'>
            <h1 className='text-4xl font-bold'>Vite + React</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;