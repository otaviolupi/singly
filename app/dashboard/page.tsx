import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header-admin';

export default function Dashboard() {
    return (
        <div>
            <Header />
            <div className='flex h-screen'>
                <Sidebar />
                <div className='flex-1'>
                
                </div>
            </div>
        </div>
    )
}