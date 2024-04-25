import Icon from '@/common/components/Icon';

const Certifications = () => {
  return (
    <div className="flex justify-center sm:gap-8 items-center">
      <div className="flex justify-center sm:justify-end gap-2">
        <Icon className="h-[108px] w-[60px]" name="iram" />
        <Icon className="h-[85px] w-[61px]" name="inet" />
      </div>
    </div>
  );
};

export default Certifications;
