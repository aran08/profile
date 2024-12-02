import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const urldata = [
    {
        icon: <HomeOutlinedIcon />,
        name: 'Home',
        url: '/'
    },
    {
        icon: <ErrorOutlineOutlinedIcon />,
        name: "About",
        url: '/about'
    },
    {
        icon: <Person2OutlinedIcon />,
        name: "Contacts",
        url: '/contact'
    },
    {
        icon: <GitHubIcon />,
        name: "Github",
        url: 'https://github.com/aran08'
    },
];

const Sidebarprovider = () => {

    return (
        <>
            <div className="responsive-container">
                {urldata?.map((item, index) => (
                    <a key={index} style={{
                        display: 'flex',
                        gap: '20px',
                        cursor: 'pointer',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        justifyItems: 'center',
                        marginRight: '60px',
                        marginLeft: '40px',
                        paddingLeft: '10px',
                    }}
                        href={`${item?.url}`}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#eee';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '';
                        }}
                        className='text-[20px] rounded-lg'
                    >
                        <h2>{item.icon}</h2>
                        <h2>{item.name}</h2>
                    </a>
                ))}
            </div>
            <style jsx>{`
  .responsive-container {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
 
    margin-top: 20px;
  }
`}</style>
        </>
    );
};

export default Sidebarprovider;
