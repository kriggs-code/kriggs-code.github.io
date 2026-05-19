export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      <div className="absolute left-[-12%] top-[-12%] h-[480px] w-[480px] rounded-full bg-igniteBlue/25 blur-[140px]" />
      <div className="absolute right-[-16%] top-[30%] h-[520px] w-[520px] rounded-full bg-ignitePurple/20 blur-[150px]" />
      <div className="absolute bottom-[-20%] left-[20%] h-[540px] w-[540px] rounded-full bg-igniteGold/10 blur-[160px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_top,black,transparent_68%)]" />
    </div>
  );
}
