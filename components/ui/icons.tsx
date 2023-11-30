import { ChakraComponent, Icon, IconProps, createIcon } from "@chakra-ui/react";
import { SVGProps } from "react";

export const HomeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 14 15" {...props}>
    <path d="M1.72105 13.1121H4.94062V8.60251C4.94062 8.43384 4.99714 8.29298 5.11018 8.17993C5.22322 8.06688 5.36408 8.01036 5.53276 8.01036H8.48145C8.63906 8.01036 8.77475 8.06688 8.88851 8.17993C9.00228 8.29298 9.05916 8.43384 9.05916 8.60251V13.1121H12.2787V5.30818C12.2787 5.26544 12.2694 5.22671 12.2507 5.19199C12.232 5.15727 12.2066 5.12655 12.1746 5.09984L7.15214 1.32849C7.1094 1.29643 7.05865 1.28041 6.99989 1.28041C6.94112 1.28041 6.89037 1.29643 6.84764 1.32849L1.82522 5.09984C1.79317 5.12655 1.76779 5.15727 1.7491 5.19199C1.7304 5.22671 1.72105 5.26544 1.72105 5.30818V13.1121ZM0.807617 13.1121V5.31566C0.807617 5.12423 0.846228 4.94821 0.92345 4.78761C1.00067 4.62703 1.11911 4.49161 1.27876 4.38136L6.30118 0.594531C6.50614 0.437475 6.73846 0.358948 6.99816 0.358948C7.25785 0.358948 7.49133 0.437475 7.6986 0.594531L12.721 4.38136C12.8807 4.49161 12.9991 4.62703 13.0763 4.78761C13.1535 4.94821 13.1922 5.12423 13.1922 5.31566V13.1121C13.1922 13.3604 13.102 13.5747 12.9216 13.755C12.7413 13.9354 12.527 14.0256 12.2787 14.0256H8.73787C8.5692 14.0256 8.42835 13.969 8.3153 13.856C8.20225 13.7429 8.14572 13.6021 8.14572 13.4334V8.9238H5.85405V13.4334C5.85405 13.6021 5.79733 13.7429 5.68387 13.856C5.57041 13.969 5.4351 14.0256 5.27793 14.0256H1.71468C1.47126 14.0256 1.25923 13.9354 1.07858 13.755C0.897937 13.5747 0.807617 13.3604 0.807617 13.1121Z" />
  </Icon>
);

export const ChartIcon = (props: IconProps) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <path d="M4.69632 11.9727C4.82521 11.9727 4.93292 11.9285 5.01944 11.8402C5.10598 11.7519 5.14926 11.6414 5.14926 11.5088V7.12897C5.14926 7.00743 5.10436 6.90212 5.01457 6.81305C4.92478 6.724 4.81857 6.67947 4.69594 6.67947C4.56226 6.67947 4.45215 6.724 4.36561 6.81305C4.27908 6.90212 4.23582 7.00743 4.23582 7.12897V11.5088C4.23582 11.6414 4.28035 11.7519 4.3694 11.8402C4.45847 11.9285 4.56744 11.9727 4.69632 11.9727ZM8.00721 11.9727C8.13609 11.9727 8.2438 11.9285 8.33034 11.8402C8.41687 11.7519 8.46013 11.6414 8.46013 11.5088V4.47674C8.46013 4.35519 8.41524 4.24988 8.32546 4.16082C8.23567 4.07175 8.12946 4.02722 8.00684 4.02722C7.87316 4.02722 7.76305 4.07175 7.67651 4.16082C7.58996 4.24988 7.54669 4.35519 7.54669 4.47674V11.5088C7.54669 11.6414 7.59123 11.7519 7.6803 11.8402C7.76937 11.9285 7.87834 11.9727 8.00721 11.9727ZM11.3117 11.9727C11.4406 11.9727 11.5483 11.9285 11.6348 11.8402C11.7213 11.7519 11.7646 11.6414 11.7646 11.5088V9.72193C11.7646 9.60558 11.7197 9.50157 11.6299 9.40991C11.5402 9.31824 11.4339 9.27241 11.3113 9.27241C11.1776 9.27241 11.0675 9.31824 10.981 9.40991C10.8944 9.50157 10.8512 9.60558 10.8512 9.72193V11.5088C10.8512 11.6414 10.8957 11.7519 10.9848 11.8402C11.0738 11.9285 11.1828 11.9727 11.3117 11.9727ZM2.14257 15.0256C1.82869 15.0256 1.55557 14.9094 1.32319 14.677C1.0908 14.4446 0.974609 14.1715 0.974609 13.8576V2.14232C0.974609 1.82845 1.0908 1.55532 1.32319 1.32295C1.55557 1.09056 1.82869 0.974365 2.14257 0.974365H13.8579C14.1717 0.974365 14.4449 1.09056 14.6772 1.32295C14.9096 1.55532 15.0258 1.82845 15.0258 2.14232V13.8576C15.0258 14.1715 14.9096 14.4446 14.6772 14.677C14.4449 14.9094 14.1717 15.0256 13.8579 15.0256H2.14257ZM2.14446 14.1121H13.856C13.9201 14.1121 13.9788 14.0854 14.0323 14.032C14.0857 13.9786 14.1124 13.9198 14.1124 13.8557V2.14422C14.1124 2.08012 14.0857 2.02136 14.0323 1.96793C13.9788 1.91451 13.9201 1.8878 13.856 1.8878H2.14446C2.08037 1.8878 2.0216 1.91451 1.96817 1.96793C1.91476 2.02136 1.88805 2.08012 1.88805 2.14422V13.8557C1.88805 13.9198 1.91476 13.9786 1.96817 14.032C2.0216 14.0854 2.08037 14.1121 2.14446 14.1121Z" />
  </Icon>
);

export const GroupIcon = (props: IconProps) => (
  <Icon viewBox="0 0 18 12" {...props}>
    <path d="M0.744385 10.1181C0.744385 9.69964 0.850746 9.32917 1.06347 9.00672C1.2762 8.68424 1.56568 8.43197 1.93188 8.24988C2.70965 7.87123 3.49049 7.57867 4.27441 7.3722C5.05832 7.16574 5.91663 7.06251 6.84932 7.06251C7.78202 7.06251 8.63859 7.16574 9.41903 7.3722C10.1995 7.57867 10.9804 7.87126 11.7618 8.24997C12.1273 8.43322 12.4163 8.68593 12.6289 9.00811C12.8415 9.33029 12.9478 9.70045 12.9478 10.1186V10.6891C12.9478 11.0014 12.833 11.2765 12.6032 11.5143C12.3734 11.752 12.0943 11.8709 11.766 11.8709H1.92624C1.59789 11.8709 1.31883 11.7561 1.08905 11.5263C0.859274 11.2965 0.744385 11.0174 0.744385 10.6891V10.1181ZM16.0777 11.8709H14.2355C14.329 11.6909 14.4015 11.5017 14.4531 11.3031C14.5046 11.1046 14.5304 10.8999 14.5304 10.6891V10.0841C14.5304 9.54106 14.407 9.02354 14.1602 8.53155C13.9135 8.03956 13.551 7.62387 13.0729 7.28447C13.6023 7.37047 14.1056 7.49599 14.583 7.66103C15.0604 7.82606 15.5196 8.02479 15.9607 8.25722C16.373 8.47409 16.6926 8.73493 16.9194 9.03974C17.1461 9.34454 17.2595 9.6764 17.2595 10.0353V10.6866C17.2595 11.0173 17.1439 11.2974 16.9127 11.5268C16.6815 11.7562 16.4032 11.8709 16.0777 11.8709ZM6.84932 5.76038C6.06842 5.76038 5.40391 5.48633 4.8558 4.93824C4.3077 4.39013 4.03366 3.72562 4.03366 2.94472C4.03366 2.1638 4.3077 1.49929 4.8558 0.951196C5.40391 0.403085 6.06842 0.129028 6.84932 0.129028C7.63023 0.129028 8.29473 0.403085 8.84284 0.951196C9.39094 1.49929 9.66499 2.1638 9.66499 2.94472C9.66499 3.72562 9.39094 4.39013 8.84284 4.93824C8.29473 5.48633 7.63023 5.76038 6.84932 5.76038ZM13.7419 2.93578C13.7419 3.7105 13.4678 4.37322 12.9197 4.92392C12.3716 5.47462 11.7071 5.74997 10.9262 5.74997C10.8477 5.74997 10.7434 5.74037 10.6135 5.72117C10.4835 5.70198 10.3765 5.68086 10.2924 5.65782C10.617 5.27824 10.8658 4.85659 11.0387 4.39288C11.2116 3.92917 11.298 3.44438 11.298 2.93851C11.298 2.43449 11.2091 1.95109 11.0312 1.4883C10.8533 1.02549 10.607 0.600981 10.2924 0.214759C10.3966 0.1763 10.5029 0.152397 10.6113 0.14305C10.7197 0.133703 10.8247 0.129028 10.9262 0.129028C11.7071 0.129028 12.3716 0.403855 12.9197 0.953508C13.4678 1.50316 13.7419 2.16392 13.7419 2.93578ZM1.91022 10.7051H11.782V10.1204C11.782 9.94293 11.7385 9.78594 11.6514 9.64945C11.5643 9.51295 11.4241 9.39261 11.2307 9.28845C10.5488 8.93908 9.85225 8.67506 9.14112 8.49636C8.42999 8.31768 7.66665 8.22834 6.85109 8.22834C6.03319 8.22834 5.26752 8.31768 4.55409 8.49636C3.84066 8.67506 3.14314 8.93908 2.46151 9.28845C2.26545 9.39261 2.12456 9.5132 2.03882 9.6502C1.95309 9.78721 1.91022 9.9436 1.91022 10.1194V10.7051ZM6.84803 4.59455C7.30295 4.59455 7.69186 4.43352 8.01478 4.11147C8.3377 3.78941 8.49916 3.40092 8.49916 2.94601C8.49916 2.49108 8.33813 2.10215 8.01607 1.77924C7.69402 1.45632 7.30553 1.29486 6.85061 1.29486C6.3957 1.29486 6.00678 1.45589 5.68386 1.77795C5.36095 2.1 5.19949 2.48849 5.19949 2.94342C5.19949 3.39834 5.36052 3.78726 5.68257 4.11017C6.00463 4.43309 6.39311 4.59455 6.84803 4.59455Z" />
  </Icon>
);
export const MoneyIcon = (props: IconProps) => (
  <Icon viewBox="0 0 18 12" {...props}>
    <path d="M2.1459 11.9383C1.75478 11.9383 1.41995 11.799 1.14142 11.5205C0.862897 11.2419 0.723633 10.9071 0.723633 10.516V3.02887C0.723633 2.87034 0.780751 2.73389 0.894987 2.61952C1.00922 2.50514 1.14651 2.44795 1.30684 2.44795C1.46717 2.44795 1.60436 2.50514 1.7184 2.61952C1.83245 2.73389 1.88947 2.87034 1.88947 3.02887V10.516C1.88947 10.5801 1.91618 10.6389 1.96961 10.6923C2.02303 10.7457 2.08179 10.7724 2.1459 10.7724H14.2452C14.4037 10.7724 14.5402 10.8296 14.6545 10.9441C14.7689 11.0585 14.8261 11.195 14.8261 11.3536C14.8261 11.5153 14.7689 11.6531 14.6545 11.7672C14.5402 11.8812 14.4037 11.9383 14.2452 11.9383H2.1459ZM5.02888 9.0721C4.63776 9.0721 4.30293 8.93284 4.0244 8.65431C3.74588 8.37578 3.60661 8.04095 3.60661 7.64983V1.41989C3.60661 1.02877 3.74588 0.693939 4.0244 0.415412C4.30293 0.136884 4.63776 -0.00238037 5.02888 -0.00238037H15.8542C16.2453 -0.00238037 16.5801 0.136884 16.8586 0.415412C17.1372 0.693939 17.2764 1.02877 17.2764 1.41989V7.64983C17.2764 8.04095 17.1372 8.37578 16.8586 8.65431C16.5801 8.93284 16.2453 9.0721 15.8542 9.0721H5.02888ZM6.22838 7.90627C6.22838 7.49761 6.08582 7.15 5.8007 6.86341C5.51558 6.57681 5.17283 6.43352 4.77245 6.43352V7.64983C4.77245 7.71929 4.79783 7.77939 4.84859 7.83014C4.89934 7.88089 4.95944 7.90627 5.02888 7.90627H6.22838ZM14.6547 7.90627H15.8542C15.9236 7.90627 15.9837 7.88089 16.0345 7.83014C16.0852 7.77939 16.1106 7.71929 16.1106 7.64983V6.43352C15.7056 6.43352 15.3617 6.57715 15.0789 6.86441C14.7961 7.15166 14.6547 7.49895 14.6547 7.90627ZM10.4383 6.49197C10.9891 6.49197 11.4521 6.30174 11.8273 5.92129C12.2026 5.54084 12.3902 5.07582 12.3902 4.52622C12.3902 3.9824 12.2013 3.5217 11.8234 3.14412C11.4455 2.76655 10.9835 2.57777 10.4376 2.57777C9.8916 2.57777 9.42817 2.76517 9.0473 3.13997C8.66644 3.51479 8.47601 3.97869 8.47601 4.53166C8.47601 5.08106 8.66538 5.54513 9.04411 5.92387C9.42283 6.30261 9.88757 6.49197 10.4383 6.49197ZM4.77245 2.6362C5.17746 2.6362 5.52137 2.49258 5.80417 2.20533C6.08698 1.91806 6.22838 1.57077 6.22838 1.16345H5.02888C4.95944 1.16345 4.89934 1.18883 4.84859 1.2396C4.79783 1.29035 4.77245 1.35045 4.77245 1.41989V2.6362ZM16.1106 2.6362V1.41989C16.1106 1.35045 16.0852 1.29035 16.0345 1.2396C15.9837 1.18883 15.9236 1.16345 15.8542 1.16345H14.6547C14.6547 1.57211 14.7972 1.91973 15.0823 2.20633C15.3675 2.49291 15.7102 2.6362 16.1106 2.6362Z" />
  </Icon>
);

export const WidgetsIcon = (props: IconProps) => (
  <Icon viewBox="0 0 15 15" {...props}>
    <path d="M10.2528 7.48683L7.19195 4.42595C7.11395 4.34797 7.05893 4.26535 7.02687 4.1781C6.99483 4.09085 6.97881 3.99737 6.97881 3.89766C6.97881 3.79794 6.99483 3.70481 7.02687 3.61827C7.05893 3.53174 7.11395 3.44947 7.19195 3.37147L10.2528 0.310619C10.3308 0.232633 10.4134 0.177613 10.5007 0.145557C10.5879 0.113502 10.6814 0.0974731 10.7811 0.0974731C10.8808 0.0974731 10.974 0.113502 11.0605 0.145557C11.147 0.177613 11.2293 0.232633 11.3073 0.310619L14.3681 3.37147C14.4461 3.44947 14.5012 3.5321 14.5332 3.61935C14.5653 3.7066 14.5813 3.80008 14.5813 3.89979C14.5813 3.99951 14.5653 4.09263 14.5332 4.17916C14.5012 4.2657 14.4461 4.34797 14.3681 4.42595L11.3073 7.48683C11.2293 7.56481 11.1467 7.61984 11.0594 7.65189C10.9722 7.68393 10.8787 7.69995 10.779 7.69995C10.6793 7.69995 10.5861 7.68393 10.4996 7.65189C10.4131 7.61984 10.3308 7.56481 10.2528 7.48683ZM0.222412 5.86666V1.53979C0.222412 1.32637 0.294593 1.14748 0.438954 1.00312C0.583315 0.858758 0.762204 0.786578 0.975621 0.786578H5.3025C5.5159 0.786578 5.69478 0.858758 5.83914 1.00312C5.9835 1.14748 6.05568 1.32637 6.05568 1.53979V5.86666C6.05568 6.08006 5.9835 6.25895 5.83914 6.40331C5.69478 6.54767 5.5159 6.61985 5.3025 6.61985H0.975621C0.762204 6.61985 0.583315 6.54767 0.438954 6.40331C0.294593 6.25895 0.222412 6.08006 0.222412 5.86666ZM8.04289 13.6871V9.36025C8.04289 9.14684 8.11507 8.96796 8.25943 8.8236C8.40379 8.67924 8.58268 8.60706 8.79608 8.60706H13.123C13.3364 8.60706 13.5153 8.67924 13.6596 8.8236C13.804 8.96796 13.8762 9.14684 13.8762 9.36025V13.6871C13.8762 13.9005 13.804 14.0794 13.6596 14.2238C13.5153 14.3681 13.3364 14.4403 13.123 14.4403H8.79608C8.58268 14.4403 8.40379 14.3681 8.25943 14.2238C8.11507 14.0794 8.04289 13.9005 8.04289 13.6871ZM0.222412 13.6871V9.36025C0.222412 9.14684 0.294593 8.96796 0.438954 8.8236C0.583315 8.67924 0.762204 8.60706 0.975621 8.60706H5.3025C5.5159 8.60706 5.69478 8.67924 5.83914 8.8236C5.9835 8.96796 6.05568 9.14684 6.05568 9.36025V13.6871C6.05568 13.9005 5.9835 14.0794 5.83914 14.2238C5.69478 14.3681 5.5159 14.4403 5.3025 14.4403H0.975621C0.762204 14.4403 0.583315 14.3681 0.438954 14.2238C0.294593 14.0794 0.222412 13.9005 0.222412 13.6871ZM1.47239 5.36989H4.80572V2.03656H1.47239V5.36989ZM10.8009 6.27372L13.155 3.91956L10.8009 1.56539L8.4467 3.91956L10.8009 6.27372ZM9.29285 13.1903H12.6262V9.85702H9.29285V13.1903ZM1.47239 13.1903H4.80572V9.85702H1.47239V13.1903Z" />
  </Icon>
);

export const BellIcon = (props: IconProps) => (
  <Icon viewBox="0 0 14 17" {...props}>
    <path d="M1.375 13.7371C1.19792 13.7371 1.04948 13.6772 0.929688 13.5574C0.809896 13.4375 0.75 13.289 0.75 13.1119C0.75 12.9347 0.809896 12.7863 0.929688 12.6666C1.04948 12.547 1.19792 12.4872 1.375 12.4872H2.25642V6.26919C2.25642 5.14847 2.6023 4.15755 3.29406 3.29644C3.98584 2.43533 4.87393 1.88458 5.95833 1.64421V1.12498C5.95833 0.835632 6.05951 0.589689 6.26188 0.387147C6.46424 0.184592 6.70996 0.083313 6.99904 0.083313C7.28812 0.083313 7.53416 0.184592 7.73715 0.387147C7.94013 0.589689 8.04163 0.835632 8.04163 1.12498V1.64421C9.12603 1.88458 10.0141 2.43533 10.7059 3.29644C11.3977 4.15755 11.7435 5.14847 11.7435 6.26919V12.4872H12.625C12.802 12.4872 12.9505 12.5471 13.0703 12.6669C13.1901 12.7868 13.25 12.9353 13.25 13.1124C13.25 13.2896 13.1901 13.438 13.0703 13.5576C12.9505 13.6773 12.802 13.7371 12.625 13.7371H1.375ZM6.99856 16.0769C6.58391 16.0769 6.22942 15.9294 5.93508 15.6344C5.64075 15.3394 5.49358 14.9847 5.49358 14.5705H8.50638C8.50638 14.9861 8.35874 15.341 8.06346 15.6354C7.76818 15.9297 7.41322 16.0769 6.99856 16.0769ZM3.50638 12.4872H10.4936V6.26919C10.4936 5.30444 10.1525 4.48099 9.47033 3.79883C8.78818 3.11667 7.96473 2.77558 6.99998 2.77558C6.03523 2.77558 5.21178 3.11667 4.52963 3.79883C3.84746 4.48099 3.50638 5.30444 3.50638 6.26919V12.4872Z" />
  </Icon>
);

export const ChatIcon = (props: IconProps) => (
  <Icon viewBox="0 0 16 15" {...props}>
    <path d="M3.83323 9.45827H8.83323C9.01058 9.45827 9.15908 9.39845 9.27873 9.27879C9.39838 9.15914 9.45821 9.01064 9.45821 8.83329C9.45821 8.65595 9.39838 8.50745 9.27873 8.38779C9.15908 8.26814 9.01058 8.20831 8.83323 8.20831H3.83323C3.65588 8.20831 3.50738 8.26814 3.38773 8.38779C3.26808 8.50745 3.20825 8.65595 3.20825 8.83329C3.20825 9.01064 3.26808 9.15914 3.38773 9.27879C3.50738 9.39845 3.65588 9.45827 3.83323 9.45827ZM3.83323 6.95827H12.1666C12.3439 6.95827 12.4924 6.89845 12.6121 6.77879C12.7317 6.65914 12.7915 6.51064 12.7915 6.33329C12.7915 6.15595 12.7317 6.00745 12.6121 5.88779C12.4924 5.76814 12.3439 5.70831 12.1666 5.70831H3.83323C3.65588 5.70831 3.50738 5.76814 3.38773 5.88779C3.26808 6.00745 3.20825 6.15595 3.20825 6.33329C3.20825 6.51064 3.26808 6.65914 3.38773 6.77879C3.50738 6.89845 3.65588 6.95827 3.83323 6.95827ZM3.83323 4.45827H12.1666C12.3439 4.45827 12.4924 4.39845 12.6121 4.27879C12.7317 4.15914 12.7915 4.01064 12.7915 3.83329C12.7915 3.65595 12.7317 3.50745 12.6121 3.38779C12.4924 3.26814 12.3439 3.20831 12.1666 3.20831H3.83323C3.65588 3.20831 3.50738 3.26814 3.38773 3.38779C3.26808 3.50745 3.20825 3.65595 3.20825 3.83329C3.20825 4.01064 3.26808 4.15914 3.38773 4.27879C3.50738 4.39845 3.65588 4.45827 3.83323 4.45827ZM3.03196 12.5833L1.36371 14.2515C1.12653 14.4887 0.853828 14.5424 0.545606 14.4126C0.23737 14.2828 0.083252 14.0491 0.083252 13.7115V1.58973C0.083252 1.16879 0.229085 0.81248 0.520752 0.520813C0.812419 0.229146 1.16872 0.083313 1.58967 0.083313H14.4101C14.8311 0.083313 15.1874 0.229146 15.479 0.520813C15.7707 0.81248 15.9165 1.16879 15.9165 1.58973V11.0769C15.9165 11.4978 15.7707 11.8541 15.479 12.1458C15.1874 12.4374 14.8311 12.5833 14.4101 12.5833H3.03196ZM2.49992 11.3333H14.4101C14.4742 11.3333 14.533 11.3066 14.5864 11.2532C14.6399 11.1997 14.6666 11.141 14.6666 11.0769V1.58973C14.6666 1.52562 14.6399 1.46685 14.5864 1.41342C14.533 1.36 14.4742 1.33329 14.4101 1.33329H1.58967C1.52556 1.33329 1.46679 1.36 1.41336 1.41342C1.35994 1.46685 1.33323 1.52562 1.33323 1.58973V12.4871L2.49992 11.3333Z" />
  </Icon>
);

export const MenuIcon = (props: IconProps) => (
  <Icon viewBox="0 0 18 12" {...props}>
    <path d="M1 11.275C0.85 11.275 0.729333 11.225 0.638 11.125C0.546 11.025 0.5 10.9083 0.5 10.775C0.5 10.625 0.546 10.5043 0.638 10.413C0.729333 10.321 0.85 10.275 1 10.275H17C17.15 10.275 17.271 10.321 17.363 10.413C17.4543 10.5043 17.5 10.625 17.5 10.775C17.5 10.9083 17.4543 11.025 17.363 11.125C17.271 11.225 17.15 11.275 17 11.275H1ZM1 6.49998C0.85 6.49998 0.729333 6.44998 0.638 6.34998C0.546 6.24998 0.5 6.13331 0.5 5.99998C0.5 5.84998 0.546 5.72898 0.638 5.63698C0.729333 5.54564 0.85 5.49998 1 5.49998H17C17.15 5.49998 17.271 5.54998 17.363 5.64998C17.4543 5.74998 17.5 5.86664 17.5 5.99998C17.5 6.14998 17.4543 6.27098 17.363 6.36298C17.271 6.45431 17.15 6.49998 17 6.49998H1ZM1 1.72498C0.85 1.72498 0.729333 1.67898 0.638 1.58698C0.546 1.49564 0.5 1.37498 0.5 1.22498C0.5 1.09164 0.546 0.974976 0.638 0.874976C0.729333 0.774976 0.85 0.724976 1 0.724976H17C17.15 0.724976 17.271 0.774976 17.363 0.874976C17.4543 0.974976 17.5 1.09164 17.5 1.22498C17.5 1.37498 17.4543 1.49564 17.363 1.58698C17.271 1.67898 17.15 1.72498 17 1.72498H1Z" />
  </Icon>
);

export const InfoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <mask
      id="mask0_1_1444"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_1_1444)">
      <path d="M10.0002 13.9583C10.1773 13.9583 10.3257 13.8984 10.4454 13.7786C10.5651 13.6588 10.6249 13.5104 10.6249 13.3333V9.79161C10.6249 9.61454 10.565 9.46611 10.4451 9.34631C10.3253 9.22652 10.1768 9.16663 9.99963 9.16663C9.82246 9.16663 9.67405 9.22652 9.5544 9.34631C9.43475 9.46611 9.37492 9.61454 9.37492 9.79161V13.3333C9.37492 13.5104 9.43484 13.6588 9.55467 13.7786C9.67452 13.8984 9.82302 13.9583 10.0002 13.9583ZM9.9999 7.74036C10.1906 7.74036 10.3505 7.67586 10.4795 7.54685C10.6085 7.41785 10.673 7.258 10.673 7.06729C10.673 6.8766 10.6085 6.71674 10.4795 6.58773C10.3505 6.45873 10.1906 6.39423 9.9999 6.39423C9.80919 6.39423 9.64934 6.45873 9.52034 6.58773C9.39134 6.71674 9.32684 6.8766 9.32684 7.06729C9.32684 7.258 9.39134 7.41785 9.52034 7.54685C9.64934 7.67586 9.80919 7.74036 9.9999 7.74036ZM10.0013 17.9166C8.90635 17.9166 7.87715 17.7088 6.91371 17.2933C5.95025 16.8777 5.11218 16.3138 4.3995 15.6014C3.68681 14.889 3.12259 14.0513 2.70686 13.0883C2.29112 12.1253 2.08325 11.0963 2.08325 10.0014C2.08325 8.90641 2.29103 7.87722 2.70659 6.91377C3.12214 5.95031 3.6861 5.11224 4.39846 4.39956C5.11084 3.68687 5.94854 3.12265 6.91156 2.70692C7.87458 2.29118 8.90356 2.08331 9.9985 2.08331C11.0934 2.08331 12.1226 2.29109 13.0861 2.70665C14.0495 3.1222 14.8876 3.68616 15.6003 4.39852C16.313 5.1109 16.8772 5.9486 17.2929 6.91163C17.7087 7.87464 17.9165 8.90362 17.9165 9.99856C17.9165 11.0935 17.7088 12.1227 17.2932 13.0861C16.8777 14.0496 16.3137 14.8877 15.6013 15.6004C14.889 16.3131 14.0513 16.8773 13.0882 17.293C12.1252 17.7087 11.0962 17.9166 10.0013 17.9166ZM9.9999 16.6666C11.861 16.6666 13.4374 16.0208 14.7291 14.7291C16.0207 13.4375 16.6666 11.8611 16.6666 9.99996C16.6666 8.13885 16.0207 6.56246 14.7291 5.27079C13.4374 3.97913 11.861 3.33329 9.9999 3.33329C8.13879 3.33329 6.5624 3.97913 5.27073 5.27079C3.97906 6.56246 3.33323 8.13885 3.33323 9.99996C3.33323 11.8611 3.97906 13.4375 5.27073 14.7291C6.5624 16.0208 8.13879 16.6666 9.9999 16.6666Z" />
    </g>
  </Icon>
);

export const ChevronDownIcon = (props: IconProps) => (
  <Icon viewBox="0 0 12 7" {...props}>
    <path d="M5.99942 6.02112C5.8789 6.02112 5.76673 6.00189 5.66289 5.96342C5.55904 5.92496 5.46032 5.85893 5.36674 5.76535L0.872517 1.27112C0.73405 1.13267 0.663217 0.958642 0.660017 0.749025C0.6568 0.539408 0.727634 0.362166 0.872517 0.217299C1.01738 0.0724322 1.19302 0 1.39942 0C1.60582 0 1.78145 0.0724322 1.92632 0.217299L5.99942 4.2904L10.0725 0.217299C10.211 0.0788489 10.385 0.00801556 10.5946 0.00479889C10.8042 0.00159889 10.9814 0.0724322 11.1263 0.217299C11.2712 0.362166 11.3436 0.537808 11.3436 0.744225C11.3436 0.950625 11.2712 1.12626 11.1263 1.27112L6.63209 5.76535C6.53851 5.85893 6.43979 5.92496 6.33594 5.96342C6.23211 6.00189 6.11993 6.02112 5.99942 6.02112Z" />
  </Icon>
);

export const ChevronLeftIcon = (props: IconProps) => (
  <Icon viewBox="0 0 6 10"  {...props}>
    <path d="M4.57214 9.35253L0.864986 5.66644C0.794775 5.58218 0.745627 5.5013 0.717542 5.42379C0.689457 5.34684 0.675415 5.26623 0.675415 5.18198C0.675415 5.09773 0.689457 5.01684 0.717542 4.93933C0.745627 4.86238 0.794775 4.78177 0.864986 4.69752L4.57214 1.01143C4.6564 0.913131 4.75469 0.863983 4.86703 0.863983C4.97937 0.863983 5.07767 0.913131 5.16192 1.01143C5.26021 1.09568 5.30936 1.19398 5.30936 1.30631C5.30936 1.41865 5.26021 1.51695 5.16192 1.6012L1.58114 5.18198L5.16192 8.76276C5.26021 8.84701 5.30936 8.94531 5.30936 9.05764C5.30936 9.16998 5.26021 9.26828 5.16192 9.35253C5.07767 9.45083 4.97937 9.49998 4.86703 9.49998C4.75469 9.49998 4.6564 9.45083 4.57214 9.35253Z" />
  </Icon>
);

export const ChevronRightIcon = (props: IconProps) => (
  <Icon viewBox="0 0 6 10"  {...props}>
    <path  d="M1.42786 9.35253L5.13501 5.66644C5.20523 5.58218 5.25437 5.5013 5.28246 5.42379C5.31054 5.34684 5.32458 5.26623 5.32458 5.18198C5.32458 5.09773 5.31054 5.01684 5.28246 4.93933C5.25437 4.86238 5.20523 4.78177 5.13501 4.69752L1.42786 1.01143C1.3436 0.913131 1.24531 0.863983 1.13297 0.863983C1.02063 0.863983 0.922335 0.913131 0.838081 1.01143C0.739785 1.09568 0.690638 1.19398 0.690638 1.30631C0.690638 1.41865 0.739785 1.51695 0.838081 1.6012L4.41886 5.18198L0.838081 8.76276C0.739785 8.84701 0.690638 8.94531 0.690638 9.05764C0.690638 9.16998 0.739785 9.26828 0.838081 9.35253C0.922335 9.45083 1.02063 9.49998 1.13297 9.49998C1.24531 9.49998 1.3436 9.45083 1.42786 9.35253Z" />
  </Icon>
);


export const DownloadIcon = (props: IconProps) => (
  <Icon viewBox="0 0 12 13" {...props}>
    <path d="M6.00008 9.6875L3.04175 6.75L3.64591 6.14583L5.58341 8.08333V0.875H6.41675V8.08333L8.35425 6.14583L8.95842 6.75L6.00008 9.6875ZM1.52091 12.8333C1.13203 12.8333 0.809248 12.705 0.552581 12.4483C0.295359 12.1911 0.166748 11.8681 0.166748 11.4792V9.5H1.00008V11.4792C1.00008 11.6181 1.0523 11.7394 1.15675 11.8433C1.26064 11.9478 1.38203 12 1.52091 12H10.4792C10.6181 12 10.7395 11.9478 10.8434 11.8433C10.9479 11.7394 11.0001 11.6181 11.0001 11.4792V9.5H11.8334V11.4792C11.8334 11.8681 11.7051 12.1911 11.4484 12.4483C11.1912 12.705 10.8681 12.8333 10.4792 12.8333H1.52091Z" />
  </Icon>
);

export const ArrowBottomLeft = (props: IconProps) => (
  <Icon viewBox="0 0 12 12" {...props}>
    <path d="M0.25 11.75V4.25H1.08333V10.3333L11.1667 0.25L11.75 0.833333L1.66667 10.9167H7.75V11.75H0.25Z" />
  </Icon>
);

export const ArrowTopRight = (props: IconProps) => (
  <Icon viewBox="0 0 12 12" {...props}>
    <path d="M0.999837 11.5833L0.416504 11L10.4998 0.916677H4.4165V0.0833435H11.9165V7.58334H11.0832V1.50001L0.999837 11.5833Z" />
  </Icon>
);


