import { CodeLanguageType } from '@srcbook/shared';

type PropsType = {
  size?: string | number;
  className?: string;
};

export function SrcbookLogo(props: PropsType) {
  return (
    <svg
      width={props.size ?? 16}
      height={props.size ?? 16}
      className={props.className}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5192 1.91235L17.0537 4.53232L18.1874 5.18731M21.5883 7.15228V12.2914V13.5762M21.5883 17.4306L17.0537 20.0506L15.9201 20.7056M12.5192 22.6705L7.98463 20.0506L6.85099 19.3956M3.45007 17.4306V12.2914V11.0067M3.45007 7.15228L7.98463 4.53232L9.11826 3.87733"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="12.5192" cy="1.91235" r="1.28759" fill="currentColor" />
      <circle cx="21.5882" cy="7.15234" r="1.28759" fill="currentColor" />
      <circle cx="21.5882" cy="13.5771" r="1.28759" fill="currentColor" />
      <circle cx="21.5882" cy="17.4307" r="1.28759" fill="currentColor" />
      <circle cx="15.9191" cy="20.7056" r="1.28759" fill="currentColor" />
      <circle cx="12.5192" cy="22.6704" r="1.28759" fill="currentColor" />
      <circle cx="6.84997" cy="19.3955" r="1.28759" fill="currentColor" />
      <circle cx="3.45007" cy="17.4307" r="1.28759" fill="currentColor" />
      <circle cx="3.45007" cy="11.0076" r="1.28759" fill="currentColor" />
      <circle cx="3.45007" cy="7.15234" r="1.28759" fill="currentColor" />
      <circle cx="9.11724" cy="3.87743" r="1.28759" fill="currentColor" />
      <circle cx="18.1863" cy="5.18725" r="1.28759" fill="currentColor" />
    </svg>
  );
}

export function JavaScriptLogo(props: PropsType) {
  return (
    <svg
      width={props.size ?? '24'}
      height={props.size ?? '24'}
      viewBox="0 0 512 512"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_32_1298)">
        <path d="M512 0H0V512H512V0Z" fill="#F7DF1E" />
        <path
          d="M343.934 400.002C354.247 416.841 367.665 429.218 391.396 429.218C411.331 429.218 424.066 419.255 424.066 405.488C424.066 388.99 410.982 383.147 389.039 373.549L377.011 368.388C342.292 353.597 319.228 335.067 319.228 295.895C319.228 259.811 346.722 232.342 389.689 232.342C420.279 232.342 442.271 242.989 458.118 270.864L420.653 294.92C412.404 280.129 403.505 274.302 389.689 274.302C375.597 274.302 366.665 283.242 366.665 294.92C366.665 309.354 375.605 315.197 396.248 324.137L408.275 329.289C449.154 346.819 472.235 364.69 472.235 404.87C472.235 448.187 438.207 471.918 392.509 471.918C347.827 471.918 318.96 450.625 304.835 422.717L343.934 400.002ZM173.974 404.171C181.533 417.581 188.408 428.918 204.938 428.918C220.745 428.918 230.717 422.733 230.717 398.685V235.089H278.829V399.336C278.829 449.154 249.62 471.828 206.986 471.828C168.464 471.828 146.156 451.893 134.811 427.882L173.974 404.171Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_1298">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function TypeScriptLogo(props: PropsType) {
  return (
    <svg
      width={props.size ?? '24'}
      height={props.size ?? '24'}
      viewBox="0 0 512 512"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_32_1301)">
        <path
          d="M462 0H50C22.3858 0 0 22.3858 0 50V462C0 489.614 22.3858 512 50 512H462C489.614 512 512 489.614 512 462V50C512 22.3858 489.614 0 462 0Z"
          fill="#3178C6"
        />
        <path
          d="M512 0H0.000267982C0.000660601 170.667 0.00243569 341.333 0 512H512V0Z"
          fill="#3178C6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M316.939 407.424V457.485C325.077 461.657 334.702 464.785 345.814 466.871C356.926 468.957 368.637 470 380.949 470C392.948 470 404.346 468.853 415.145 466.558C425.944 464.264 435.413 460.483 443.551 455.216C451.689 449.95 458.132 443.066 462.879 434.566C467.626 426.066 470 415.559 470 403.044C470 393.97 468.644 386.018 465.931 379.187C463.218 372.356 459.306 366.281 454.193 360.962C449.081 355.643 442.951 350.871 435.804 346.647C428.657 342.423 420.597 338.434 411.624 334.68C405.051 331.968 399.156 329.335 393.939 326.78C388.722 324.224 384.288 321.617 380.636 318.958C376.984 316.298 374.167 313.482 372.185 310.51C370.203 307.537 369.211 304.174 369.211 300.419C369.211 296.978 370.098 293.875 371.872 291.111C373.646 288.347 376.15 285.975 379.384 283.993C382.619 282.012 386.583 280.473 391.278 279.378C395.974 278.283 401.19 277.736 406.929 277.736C411.102 277.736 415.51 278.049 420.153 278.674C424.796 279.3 429.465 280.265 434.161 281.568C438.856 282.872 443.42 284.515 447.855 286.496C452.289 288.478 456.384 290.772 460.14 293.38V246.604C452.524 243.684 444.203 241.52 435.178 240.112C426.153 238.704 415.797 238 404.112 238C392.217 238 380.949 239.278 370.307 241.833C359.665 244.388 350.301 248.377 342.214 253.8C334.128 259.224 327.738 266.133 323.043 274.529C318.348 282.924 316 292.962 316 304.643C316 319.557 320.304 332.281 328.912 342.815C337.519 353.348 350.587 362.265 368.116 369.566C375.002 372.382 381.419 375.145 387.366 377.857C393.313 380.569 398.452 383.385 402.781 386.305C407.111 389.225 410.528 392.406 413.033 395.848C415.537 399.289 416.789 403.2 416.789 407.581C416.789 410.814 416.006 413.812 414.441 416.576C412.876 419.34 410.502 421.738 407.32 423.772C404.138 425.806 400.173 427.396 395.426 428.543C390.678 429.691 385.123 430.264 378.758 430.264C367.907 430.264 357.161 428.361 346.518 424.554C335.876 420.748 326.016 415.038 316.939 407.424ZM232.78 284.082H297V243H118V284.082H181.906V467H232.78V284.082Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_1301">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LanguageLogo({ language, ...props }: PropsType & { language: CodeLanguageType }) {
  return language === 'typescript' ? <TypeScriptLogo {...props} /> : <JavaScriptLogo {...props} />;
}

export function PrettierLogo(props: PropsType) {
  return (
    <svg
      fill="currentColor"
      width={props.size ?? '24'}
      height={props.size ?? '24'}
      viewBox="0 0 24 24"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.571 23.429A.571.571 0 0 1 8 24H2.286a.571.571 0 0 1 0-1.143H8c.316 0 .571.256.571.572zM8 20.57H6.857a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zm-5.714 1.143H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM8 18.286H2.286a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zM16 16H5.714a.571.571 0 0 0 0 1.143H16A.571.571 0 0 0 16 16zM2.286 17.143h1.143a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm17.143-3.429H16a.571.571 0 0 0 0 1.143h3.429a.571.571 0 0 0 0-1.143zM9.143 14.857h4.571a.571.571 0 0 0 0-1.143H9.143a.571.571 0 0 0 0 1.143zm-6.857 0h4.571a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM20.57 11.43H11.43a.571.571 0 0 0 0 1.142h9.142a.571.571 0 0 0 0-1.142zM9.714 12a.571.571 0 0 0-.571-.571H5.714a.571.571 0 0 0 0 1.142h3.429A.571.571 0 0 0 9.714 12zm-7.428.571h1.143a.571.571 0 0 0 0-1.142H2.286a.571.571 0 0 0 0 1.142zm19.428-3.428H16a.571.571 0 0 0 0 1.143h5.714a.571.571 0 0 0 0-1.143zM2.286 10.286H8a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm13.143-2.857c0 .315.255.571.571.571h5.714a.571.571 0 0 0 0-1.143H16a.571.571 0 0 0-.571.572zm-8.572-.572a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143H6.857zM2.286 8H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm16.571-2.857c0 .315.256.571.572.571h1.142a.571.571 0 0 0 0-1.143H19.43a.571.571 0 0 0-.572.572zm-1.143 0a.571.571 0 0 0-.571-.572H12.57a.571.571 0 0 0 0 1.143h4.572a.571.571 0 0 0 .571-.571zm-15.428.571h8a.571.571 0 0 0 0-1.143h-8a.571.571 0 0 0 0 1.143zm5.143-2.857c0 .316.255.572.571.572h11.429a.571.571 0 0 0 0-1.143H8a.571.571 0 0 0-.571.571zm-5.143.572h3.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm0-2.286H16A.571.571 0 0 0 16 0H2.286a.571.571 0 0 0 0 1.143z" />
    </svg>
  );
}
