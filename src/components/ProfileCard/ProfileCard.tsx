import React from 'react';
import PersonalInfo from './PersonalInfo';
import PerformanceStats from './PerformanceStats';
import DetailedInfo from './DetailedInfo';
import PerformanceMetrics from './PerformanceMetrics';
import OrderHistory from './OrderHistory';



const ProfileCard: React.FC = () => {
    return (
        <div className="flex overflow-hidden flex-col px-6 pt-6 pb-14 bg-white rounded-md max-w-[774px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
            <div className="flex flex-wrap gap-4 justify-center items-center w-full max-md:max-w-full">
                <PersonalInfo
                    name="John Doe"
                    email="john.doe@example.com"
                    phone="123-456-7890"
                    address="123 Main St"
                    avatarSrc=""
                />
                <PerformanceStats deliveredOrders={12} failedOrders={3} />
            </div>
            <DetailedInfo
                idCard=""
                drivingLicense=""
                licenseType=""
                bank=""
                bankAccount=""
                licensePlate=""
            />
            <PerformanceMetrics
                activityStatus=""
                pickupStatus=""
                currentOrders={0}
                errorCount={0}
                todayRevenue=""
            />
            <OrderHistory
                orders={[]} // Provide an empty array or the appropriate orders data
            />
        </div>
    );
};

export default ProfileCard;