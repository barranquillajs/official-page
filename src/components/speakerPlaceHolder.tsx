import { Icon, IconCatalog } from "./icon";

export const SpeakerPlaceHolder = ({ imageSize }: { imageSize: number }) => <div className="flex justify-center">
  <div className="flex bg-primary-100 justify-center items-center rounded-full bg-slate-100" style={{ width: imageSize, height: imageSize }}>
    <Icon icon={IconCatalog.github} />
  </div>
</div>