import { auroraStyles } from "./AuroraBackground.styles";

export function AuroraBackground() {
  return (
    <div className={auroraStyles.container} aria-hidden="true">
      <div className={auroraStyles.orb1} />
      <div className={auroraStyles.orb2} />
      <div className={auroraStyles.orb3} />
    </div>
  );
}
