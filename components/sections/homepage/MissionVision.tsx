import MissionVisionClient from "@/components/sections/homepage/MissionVisionClient";
import { getMissionVision } from "@/lib/site-data";

const MissionVision = async ({ locale }: { locale: string }) => {
  const data = await getMissionVision(locale).catch(() => null);

  return <MissionVisionClient locale={locale} data={data} />;
};

export default MissionVision;
