"use client";

import { useQuery } from "@tanstack/react-query";
import DonationCard from "@/components/ui/DonationCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Link } from "@/navigation";
import { fetchCampaigns } from "@/lib/api/campaigns";

const DonationPreviewSection = ({ locale }: { locale: string }) => {
  const { data: apiData, isLoading } = useQuery({
    queryKey: ["donationPosts", locale],
    queryFn: () => fetchCampaigns(locale),
  });

  // AGAR API KHALI HAI TO YE DUMMY DATA DIKHAYE GA (TESTING KE LIYE)
  const dummyData = [
    {
      slug: "test-1",
      title: "Help for Gaza",
      description: "Emergency relief and food supplies.",
      raisedAmount: 4500,
      goalAmount: 10000,
      category: "Emergency",
    }
  ];

  const donationPosts = apiData?.length ? apiData : dummyData;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Special Missions" subtitle="Support a Cause" centered />
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {donationPosts.map((item: any, index: number) => (
            <Link key={index} href={`/donate/${item.slug}`} className="block">
              <DonationCard
                image={item.image}
                title={item.title}
                description={item.description}
                raised={item.raisedAmount}
                goal={item.goalAmount}
                percentage={Math.round((item.raisedAmount / item.goalAmount) * 100)}
                donateLabel="Donate Now"
                goalLabel="Goal"
                formatAmount={(val) => `$${val}`}
              />
            </Link>
          ))}
        </div>
        {isLoading && <p className="text-center mt-4">Loading...</p>}
      </div>
    </section>
  );
};

export default DonationPreviewSection;
 
