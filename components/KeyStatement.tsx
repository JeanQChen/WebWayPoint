/**
 * Key Statement（§32）：项目中的重要认识，作为 Section Transition 的大号文字。
 */
export function KeyStatement({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-14 max-w-[760px] text-[26px] font-medium leading-[1.25] tracking-tight text-foreground sm:my-20 sm:text-[34px]">
      {children}
    </p>
  );
}
