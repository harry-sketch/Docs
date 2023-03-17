import React from 'react';
export interface ISvgIcons {
  [key: string]: JSX.Element;
}

const FooterIcons: ISvgIcons = {
  huddle: (
    <svg
      width="145"
      height="32"
      viewBox="0 0 145 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.597656 0.831055C2.15873 1.07943 3.72162 1.31431 5.28631 1.5357V13.1447C6.96469 13.1951 8.64398 13.2437 10.3242 13.2905C10.3242 9.59362 10.3242 5.89583 10.3242 2.19714C11.8889 2.39152 13.4562 2.57151 15.0264 2.73709C15.0264 11.4754 15.0264 20.2163 15.0264 28.96C13.4581 29.1058 11.8907 29.266 10.3242 29.4406V17.1917C8.64217 17.2025 6.96289 17.2151 5.28631 17.2295V30.0723C3.72162 30.2811 2.15873 30.507 0.597656 30.7499V0.831055Z"
        fill="white"
      />
      <path
        d="M24.5344 28.5985C22.2469 28.7442 20.5063 28.3474 19.307 27.3404C18.1078 26.3333 17.5068 24.7378 17.5068 22.6509C17.5068 16.1048 17.5068 9.55875 17.5068 3.0127C19.0769 3.16928 20.6488 3.31327 22.2226 3.44466C22.2226 9.88452 22.2226 16.3244 22.2226 22.7642C22.2226 23.621 22.4229 24.2302 22.8235 24.592C23.2512 24.952 23.8513 25.1139 24.6237 25.078C25.3979 25.0456 25.9773 24.835 26.3833 24.4489C26.7894 24.0628 27.0276 23.4527 27.0276 22.6212C27.0276 16.3505 27.0276 10.0798 27.0276 3.80913C28.5436 3.91442 30.0622 4.00351 31.5782 4.07911C31.5782 10.132 31.5782 16.1858 31.5782 22.2405C31.5782 24.1681 30.9772 25.6638 29.7726 26.7653C28.5679 27.8668 26.8246 28.4554 24.5344 28.5985Z"
        fill="white"
      />
      <path
        d="M34.0845 4.20508C36.4884 4.30947 38.8941 4.38596 41.3016 4.43456C43.6513 4.48315 45.4163 4.97451 46.5912 5.94643C47.7661 6.91835 48.3535 8.33033 48.3535 10.1986C48.3535 14.0917 48.3535 17.9838 48.3535 21.8751C48.3535 23.7433 47.7652 25.1607 46.5885 26.1272C45.4136 27.0965 43.6513 27.5878 41.3016 27.6229C38.8941 27.6589 36.4866 27.7174 34.0791 27.7984C34.0827 19.9331 34.0845 12.0686 34.0845 4.20508ZM41.2041 24.3103C41.9783 24.3103 42.5658 24.1303 42.9664 23.7703C43.3968 23.414 43.6107 22.8416 43.6134 22.0479C43.6134 18.0414 43.6134 14.0341 43.6134 10.0258C43.6134 9.23206 43.3968 8.65701 42.9691 8.30064C42.5414 7.94427 41.9783 7.76068 41.2068 7.76068L38.7975 7.71748V24.34L41.2041 24.3103Z"
        fill="white"
      />
      <path
        d="M50.6795 4.47465C53.0851 4.44765 55.4917 4.39185 57.8992 4.30726C60.249 4.22087 62.0086 4.62583 63.1834 5.56805C64.3583 6.51028 64.943 7.96005 64.943 9.90389C64.943 13.95 64.943 17.9996 64.943 22.0529C64.943 24.0003 64.3565 25.4537 63.1834 26.413C62.0113 27.3714 60.249 27.7953 57.8992 27.7305C55.4935 27.6657 53.0861 27.6234 50.6768 27.6036L50.6795 4.47465ZM57.8207 24.3693C58.5949 24.3837 59.1824 24.2154 59.583 23.8644C60.0126 23.5045 60.2273 22.9249 60.2273 22.1258C60.2273 18.0383 60.2273 13.9518 60.2273 9.86609C60.2273 9.05976 60.0126 8.48291 59.583 8.13554C59.1824 7.78727 58.5949 7.62798 57.8234 7.64688L55.4168 7.70358V24.3369C56.2181 24.3477 57.0194 24.3693 57.8207 24.3693Z"
        fill="white"
      />
      <path
        d="M67.2754 3.8273C68.8491 3.72111 70.4219 3.60322 71.9938 3.47363C71.9938 10.5884 71.9938 17.7023 71.9938 24.8153C74.58 24.9341 77.1634 25.0772 79.7442 25.2446V28.9973C75.5942 28.6058 71.4389 28.3116 67.2754 28.0902C67.2772 20.0017 67.2772 11.914 67.2754 3.8273Z"
        fill="white"
      />
      <path
        d="M81.1494 2.57241C85.4266 2.08645 89.6956 1.506 93.9566 0.831055V5.1048C91.2495 5.41077 88.5478 5.69155 85.8516 5.94713V13.2527L92.2944 13.0637V17.2646C90.1504 17.2358 88.0028 17.2151 85.8516 17.2025V25.6933C88.5587 25.9183 91.2603 26.1792 93.9566 26.4762V30.7499C89.6956 30.0858 85.4293 29.5566 81.1521 29.1301C81.1521 20.2766 81.1512 11.4241 81.1494 2.57241Z"
        fill="white"
      />
      <path
        d="M124.675 0.341797H105.184C103.605 0.341797 102.09 0.967564 100.973 2.08144C99.856 3.19531 99.2285 4.70605 99.2285 6.2813V25.7197C99.2285 27.2949 99.856 28.8057 100.973 29.9195C102.09 31.0334 103.605 31.6592 105.184 31.6592H124.675C126.254 31.6592 127.769 31.0334 128.886 29.9195C130.003 28.8057 130.631 27.2949 130.631 25.7197V6.2813C130.631 4.70605 130.003 3.19531 128.886 2.08144C127.769 0.967564 126.254 0.341797 124.675 0.341797V0.341797Z"
        fill="#246BFD"
      />
      <path
        d="M141.439 5.94108C141.165 5.99963 140.905 6.10957 140.672 6.26505L136.03 9.08361C135.302 9.52919 134.705 10.1576 134.297 10.906C133.879 11.6702 133.66 12.5271 133.661 13.3979V18.6138C133.661 19.4865 133.88 20.3453 134.3 21.1111C134.709 21.8615 135.31 22.4909 136.041 22.9362L140.718 25.7547C141.021 25.9414 141.36 26.0636 141.712 26.1138C142.062 26.1626 142.419 26.1377 142.76 26.0409C143.103 25.9418 143.424 25.7747 143.702 25.5495C143.983 25.3189 144.217 25.0355 144.389 24.7153C144.624 24.2768 144.747 23.7871 144.747 23.2898V8.68405C144.746 8.26083 144.653 7.84277 144.476 7.45835C144.3 7.08046 144.043 6.74584 143.723 6.47833C143.41 6.2166 143.039 6.0317 142.64 5.93838C142.245 5.84386 141.833 5.84478 141.439 5.94108V5.94108Z"
        fill="#246BFD"
      />
      <path
        d="M110.643 26.1383C109.189 26.1383 108.076 25.7163 107.305 24.8721C106.535 24.028 106.149 22.8365 106.149 21.2976V11.1735C106.149 9.631 106.535 8.4386 107.305 7.59627C108.076 6.75394 109.189 6.33188 110.643 6.33008C112.087 6.33008 113.199 6.75214 113.978 7.59627C114.758 8.4404 115.143 9.6328 115.134 11.1735V21.2976C115.134 22.8365 114.749 24.028 113.978 24.8721C113.208 25.7163 112.096 26.1383 110.643 26.1383ZM110.643 23.3872C111.663 23.3872 112.174 22.7573 112.175 21.4974V10.9791C112.175 9.71919 111.665 9.08925 110.643 9.08925C109.622 9.08925 109.11 9.71919 109.108 10.9791V21.4893C109.108 22.7564 109.62 23.389 110.643 23.3872Z"
        fill="white"
      />
      <path
        d="M120.744 11.1735H117.649V9.02717C118.329 9.04671 119.007 8.97221 119.666 8.80578C120.142 8.69092 120.575 8.44267 120.914 8.09034C121.273 7.64843 121.548 7.14533 121.726 6.60547H123.716V25.863H120.744V11.1735Z"
        fill="white"
      />
    </svg>
  ),
  twitter: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_32878_3436)">
        <path
          d="M14.5384 5.58756C14.5446 5.72836 14.5446 5.86276 14.5446 6.00356C14.5508 10.2724 11.4144 15.2004 5.67895 15.2004C3.98731 15.2004 2.32655 14.6948 0.900391 13.7476C1.14734 13.7796 1.3943 13.7924 1.64125 13.7924C3.04271 13.7924 4.40713 13.306 5.51225 12.4036C4.1787 12.378 3.00567 11.4756 2.5982 10.1572C3.06741 10.2532 3.54897 10.234 4.00583 10.0996C2.55498 9.80517 1.5116 8.48037 1.50543 6.93796C1.50543 6.92516 1.50543 6.91236 1.50543 6.89956C1.9376 7.14917 2.42533 7.28997 2.91924 7.30277C1.55482 6.35556 1.12882 4.46756 1.95612 2.98915C3.5428 5.01156 5.87651 6.23396 8.38309 6.36836C8.12996 5.24836 8.4757 4.07075 9.28447 3.27715C10.5378 2.05475 12.5134 2.11875 13.6988 3.41795C14.3964 3.27715 15.0694 3.00835 15.6806 2.63075C15.446 3.37955 14.9582 4.01315 14.31 4.41636C14.9274 4.33956 15.5324 4.16676 16.1004 3.91075C15.6806 4.56356 15.1496 5.12676 14.5384 5.58756Z"
          fill="#94A3B8"
        />
      </g>
      <defs>
        <clipPath id="clip0_32878_3436">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5 0.800781)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  insta: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_32878_3437)">
        <path
          d="M8.50001 2.24262C10.6374 2.24262 10.8883 2.25215 11.733 2.29026C12.5143 2.3252 12.9367 2.45541 13.2193 2.56656C13.5941 2.71265 13.8609 2.88415 14.1403 3.16362C14.4198 3.4431 14.5945 3.70987 14.7374 4.08462C14.8454 4.36728 14.9788 4.78967 15.0137 5.57093C15.0518 6.41571 15.0613 6.6666 15.0613 8.80396C15.0613 10.9413 15.0518 11.1922 15.0137 12.037C14.9788 12.8182 14.8486 13.2406 14.7374 13.5233C14.5913 13.898 14.4198 14.1648 14.1403 14.4443C13.8609 14.7238 13.5941 14.8984 13.2193 15.0414C12.9367 15.1493 12.5143 15.2827 11.733 15.3177C10.8883 15.3558 10.6374 15.3653 8.50001 15.3653C6.36265 15.3653 6.11175 15.3558 5.26697 15.3177C4.48571 15.2827 4.06332 15.1525 3.78067 15.0414C3.40592 14.8953 3.13914 14.7238 2.85967 14.4443C2.58019 14.1648 2.40552 13.898 2.26261 13.5233C2.15463 13.2406 2.02124 12.8182 1.98631 12.037C1.94819 11.1922 1.93867 10.9413 1.93867 8.80396C1.93867 6.6666 1.94819 6.41571 1.98631 5.57093C2.02124 4.78967 2.15145 4.36728 2.26261 4.08462C2.4087 3.70987 2.58019 3.4431 2.85967 3.16362C3.13914 2.88415 3.40592 2.70948 3.78067 2.56656C4.06332 2.45858 4.48571 2.3252 5.26697 2.29026C6.11175 2.24897 6.36582 2.24262 8.50001 2.24262ZM8.50001 0.800781C6.32771 0.800781 6.05459 0.810309 5.20028 0.848419C4.34915 0.88653 3.76797 1.02309 3.25983 1.22C2.73263 1.42325 2.28801 1.69955 1.84339 2.14417C1.39877 2.58879 1.12565 3.03659 0.919214 3.56061C0.722311 4.06874 0.585748 4.64993 0.547638 5.50424C0.509528 6.35537 0.5 6.62849 0.5 8.80078C0.5 10.9731 0.509528 11.2462 0.547638 12.1005C0.585748 12.9516 0.722311 13.5328 0.919214 14.0441C1.12247 14.5713 1.39877 15.0159 1.84339 15.4606C2.28801 15.9052 2.73581 16.1783 3.25983 16.3847C3.76797 16.5816 4.34915 16.7182 5.20346 16.7563C6.05777 16.7944 6.32771 16.804 8.50318 16.804C10.6786 16.804 10.9486 16.7944 11.8029 16.7563C12.654 16.7182 13.2352 16.5816 13.7465 16.3847C14.2737 16.1815 14.7184 15.9052 15.163 15.4606C15.6076 15.0159 15.8807 14.5681 16.0871 14.0441C16.2841 13.536 16.4206 12.9548 16.4587 12.1005C16.4968 11.2462 16.5064 10.9762 16.5064 8.80078C16.5064 6.62531 16.4968 6.35537 16.4587 5.50106C16.4206 4.64993 16.2841 4.06874 16.0871 3.55743C15.8839 3.03024 15.6076 2.58562 15.163 2.141C14.7184 1.69637 14.2706 1.42325 13.7465 1.21682C13.2384 1.01992 12.6572 0.883354 11.8029 0.845243C10.9454 0.810309 10.6723 0.800781 8.50001 0.800781Z"
          fill="#94A3B8"
        />
        <path
          d="M8.50001 2.24262C10.6374 2.24262 10.8883 2.25215 11.733 2.29026C12.5143 2.3252 12.9367 2.45541 13.2193 2.56656C13.5941 2.71265 13.8609 2.88415 14.1403 3.16362C14.4198 3.4431 14.5945 3.70987 14.7374 4.08462C14.8454 4.36728 14.9788 4.78967 15.0137 5.57093C15.0518 6.41571 15.0613 6.6666 15.0613 8.80396C15.0613 10.9413 15.0518 11.1922 15.0137 12.037C14.9788 12.8182 14.8486 13.2406 14.7374 13.5233C14.5913 13.898 14.4198 14.1648 14.1403 14.4443C13.8609 14.7238 13.5941 14.8984 13.2193 15.0414C12.9367 15.1493 12.5143 15.2827 11.733 15.3177C10.8883 15.3558 10.6374 15.3653 8.50001 15.3653C6.36265 15.3653 6.11175 15.3558 5.26697 15.3177C4.48571 15.2827 4.06332 15.1525 3.78067 15.0414C3.40592 14.8953 3.13914 14.7238 2.85967 14.4443C2.58019 14.1648 2.40552 13.898 2.26261 13.5233C2.15463 13.2406 2.02124 12.8182 1.98631 12.037C1.94819 11.1922 1.93867 10.9413 1.93867 8.80396C1.93867 6.6666 1.94819 6.41571 1.98631 5.57093C2.02124 4.78967 2.15145 4.36728 2.26261 4.08462C2.4087 3.70987 2.58019 3.4431 2.85967 3.16362C3.13914 2.88415 3.40592 2.70948 3.78067 2.56656C4.06332 2.45858 4.48571 2.3252 5.26697 2.29026C6.11175 2.24897 6.36582 2.24262 8.50001 2.24262Z"
          fill="#94A3B8"
        />
        <path
          d="M8.50019 4.69434C6.23263 4.69434 4.39062 6.53316 4.39062 8.8039C4.39062 11.0746 6.22945 12.9135 8.50019 12.9135C10.7709 12.9135 12.6098 11.0746 12.6098 8.8039C12.6098 6.53316 10.7709 4.69434 8.50019 4.69434ZM8.50019 11.4685C7.02659 11.4685 5.83247 10.2743 5.83247 8.80073C5.83247 7.32713 7.02659 6.133 8.50019 6.133C9.97379 6.133 11.1679 7.32713 11.1679 8.80073C11.1679 10.2743 9.97379 11.4685 8.50019 11.4685Z"
          fill="#121214"
        />
        <path
          d="M12.7716 5.48853C13.3013 5.48853 13.7307 5.05913 13.7307 4.52942C13.7307 3.99972 13.3013 3.57031 12.7716 3.57031C12.2419 3.57031 11.8125 3.99972 11.8125 4.52942C11.8125 5.05913 12.2419 5.48853 12.7716 5.48853Z"
          fill="#121214"
        />
      </g>
      <defs>
        <clipPath id="clip0_32878_3437">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5 0.800781)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  linkedin: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_32878_3438)">
        <path
          d="M15.3189 0.800781H1.68111C1.36786 0.800781 1.06744 0.92522 0.84594 1.14672C0.624438 1.36822 0.5 1.66864 0.5 1.98189V15.6197C0.5 15.9329 0.624438 16.2333 0.84594 16.4548C1.06744 16.6763 1.36786 16.8008 1.68111 16.8008H15.3189C15.6321 16.8008 15.9326 16.6763 16.1541 16.4548C16.3756 16.2333 16.5 15.9329 16.5 15.6197V1.98189C16.5 1.66864 16.3756 1.36822 16.1541 1.14672C15.9326 0.92522 15.6321 0.800781 15.3189 0.800781ZM5.26889 14.4308H2.86333V6.78967H5.26889V14.4308ZM4.06445 5.73078C3.79158 5.72924 3.52528 5.64691 3.29916 5.49417C3.07304 5.34143 2.89723 5.12513 2.79392 4.87257C2.69061 4.62001 2.66443 4.34251 2.71869 4.07508C2.77294 3.80766 2.9052 3.5623 3.09877 3.36997C3.29234 3.17764 3.53854 3.04696 3.80631 2.99442C4.07408 2.94188 4.35141 2.96984 4.6033 3.07477C4.85519 3.1797 5.07036 3.35689 5.22164 3.58399C5.37293 3.81109 5.45355 4.07791 5.45333 4.35078C5.45591 4.53347 5.42167 4.71481 5.35267 4.88398C5.28368 5.05316 5.18132 5.20671 5.05171 5.33549C4.92211 5.46427 4.7679 5.56564 4.59828 5.63355C4.42867 5.70146 4.24711 5.73453 4.06445 5.73078ZM14.1356 14.4374H11.7311V10.263C11.7311 9.03189 11.2078 8.65189 10.5322 8.65189C9.81889 8.65189 9.11889 9.18967 9.11889 10.2941V14.4374H6.71333V6.79523H9.02667V7.85412H9.05778C9.29 7.38412 10.1033 6.58078 11.3444 6.58078C12.6867 6.58078 14.1367 7.37745 14.1367 9.71078L14.1356 14.4374Z"
          fill="#94A3B8"
        />
      </g>
      <defs>
        <clipPath id="clip0_32878_3438">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5 0.800781)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  youTube: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_32843_3466)">
        <rect
          width="16"
          height="16"
          transform="translate(0.597656 0.65918)"
          fill="#121214"
        />
        <path
          d="M16.2681 4.81245C16.0836 4.12711 15.5432 3.58675 14.8579 3.40224C13.6058 3.05957 8.59762 3.05957 8.59762 3.05957C8.59762 3.05957 3.58941 3.05957 2.33735 3.38906C1.6652 3.57357 1.11166 4.12711 0.927144 4.81245C0.597656 6.0645 0.597656 8.66086 0.597656 8.66086C0.597656 8.66086 0.597656 11.2704 0.927144 12.5093C1.11166 13.1946 1.65202 13.735 2.33735 13.9195C3.60259 14.2622 8.59762 14.2622 8.59762 14.2622C8.59762 14.2622 13.6058 14.2622 14.8579 13.9327C15.5432 13.7482 16.0836 13.2078 16.2681 12.5225C16.5976 11.2704 16.5976 8.67404 16.5976 8.67404C16.5976 8.67404 16.6108 6.0645 16.2681 4.81245Z"
          fill="#94A3B8"
        />
        <path
          d="M7.00293 11.0591L11.1677 8.66039L7.00293 6.26172V11.0591Z"
          fill="#121214"
        />
      </g>
      <defs>
        <clipPath id="clip0_32843_3466">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.597656 0.65918)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
};

export default FooterIcons;
