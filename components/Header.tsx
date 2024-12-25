'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { AppBar, Toolbar, Typography, InputBase, Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <AppBar position="static" style={{ background: '#fff', color: '#000000' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Drive Saya
        </Typography>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            marginRight: '20px',
          }}
        >
          <SearchIcon />
          <InputBase placeholder="Search" style={{ marginLeft: '10px' }} />
        </div>
        <Avatar
          alt={session?.user?.name || 'User'}
          src={session?.user?.image || 'http://agtest.agakcw.my.id/aga.png'}
        />
        <div style={{ marginLeft: '15px', display: 'flex', alignItems: 'center' }}>
          {session ? (
            <>
              <span style={{ marginRight: '10px' }}>{session.user?.name}</span>
              <Button
                onClick={() => signOut({ callbackUrl: '/' })}
                variant="contained"
                style={{
                  backgroundColor: 'red',
                  color: '#fff',
                  textTransform: 'none',
                }}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/login" style={{ textDecoration: 'none', color: '#000000' }}>
              Login
            </Link>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
