import { VariableFC } from '@xenopomp/advanced-types';

export namespace IconKit {
  export const Card: VariableFC<'svg'> = ({ ...props }) => {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM21 6V8.25H3V6H21ZM21 18H3V9.75H21V18ZM19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5H15.75C15.5511 16.5 15.3603 16.421 15.2197 16.2803C15.079 16.1397 15 15.9489 15 15.75C15 15.5511 15.079 15.3603 15.2197 15.2197C15.3603 15.079 15.5511 15 15.75 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75ZM13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5H11.25C11.0511 16.5 10.8603 16.421 10.7197 16.2803C10.579 16.1397 10.5 15.9489 10.5 15.75C10.5 15.5511 10.579 15.3603 10.7197 15.2197C10.8603 15.079 11.0511 15 11.25 15H12.75C12.9489 15 13.1397 15.079 13.2803 15.2197C13.421 15.3603 13.5 15.5511 13.5 15.75Z'
          fill='white'
        />
      </svg>
    );
  };

  export const Money: VariableFC<'svg'> = ({ ...props }) => {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M15.5455 15.5C15.5455 14.5134 12.7676 13.7143 9.34091 13.7143M15.5455 15.5C15.5455 16.4866 12.7676 17.2857 9.34091 17.2857C5.91423 17.2857 3.13636 16.4866 3.13636 15.5M15.5455 15.5V19.908C15.5455 20.925 12.7676 21.75 9.34091 21.75C5.91423 21.75 3.13636 20.9259 3.13636 19.908V15.5M15.5455 15.5C18.9349 15.5 21.75 14.6187 21.75 13.7143V4.78571M9.34091 13.7143C5.91423 13.7143 3.13636 14.5134 3.13636 15.5M9.34091 13.7143C5.42495 13.7143 2.25 12.833 2.25 11.9286V7.46429M9.34091 5.67857C5.42495 5.67857 2.25 6.47768 2.25 7.46429M2.25 7.46429C2.25 8.45089 5.42495 9.25 9.34091 9.25C9.34091 10.1545 12.2242 11.0357 15.6137 11.0357C19.0023 11.0357 21.75 10.1545 21.75 9.25M21.75 4.78571C21.75 3.79911 19.0023 3 15.6137 3C12.2242 3 9.47741 3.79911 9.47741 4.78571M21.75 4.78571C21.75 5.77232 19.0023 6.57143 15.6137 6.57143C12.2251 6.57143 9.47741 5.77232 9.47741 4.78571M9.47741 4.78571V13.8625'
          stroke='#04285C'
          stroke-width='2'
        />
      </svg>
    );
  };

  export const Elephant: VariableFC<'svg'> = ({ ...props }) => {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M15.5129 6.37505C17.4883 5.9588 21.75 6.46552 21.75 10.9627V19.5H18.8884V16.5848H10.714V19.5H7.85234V14.2945C7.51206 14.017 6.92609 16.2295 5.80922 16.793C5.14963 17.1258 4.58267 17.3423 3.96988 17.2097C2.64242 16.9223 2.0077 16.0852 2.33481 14.0864C2.94808 14.7802 4.78694 15.5358 4.99169 14.0864V8.04801C5.19595 6.79833 6.38106 4.34162 9.4879 4.50803H12.8365C14.2669 4.50006 16.3924 6.38208 15.9019 8.88051C15.7498 9.65628 15.1687 11.2055 13.1198 11.3789C12.3022 11.4488 10.9504 11.1296 10.1329 9.29722'
          stroke='#04285C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M7.5 10.5C8.05228 10.5 8.5 10.0523 8.5 9.49998C8.5 8.9477 8.05228 8.49998 7.5 8.49998C6.94772 8.49998 6.5 8.9477 6.5 9.49998C6.5 10.0523 6.94772 10.5 7.5 10.5Z'
          fill='#04285C'
        />
      </svg>
    );
  };

  export const Error: VariableFC<'svg'> = ({ ...props }) => {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15 9L9 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M9 9L15 15'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    );
  };

  export const Add: VariableFC<'svg'> = ({ ...props }) => {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M20.3333 2H3.66667C2.74619 2 2 2.74619 2 3.66667V20.3333C2 21.2538 2.74619 22 3.66667 22H20.3333C21.2538 22 22 21.2538 22 20.3333V3.66667C22 2.74619 21.2538 2 20.3333 2Z'
          stroke='#04285C'
          stroke-width='2'
          stroke-linejoin='round'
        />
        <path
          d='M12 7.55554V16.4444M7.55556 12H16.4444'
          stroke='#04285C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    );
  };

  export const BurgerHidden: VariableFC<'svg'> = ({ ...props }) => {
    return (
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <rect width='28' height='2' transform='translate(2 9)' fill='#04285C' />
        <rect
          width='28'
          height='2'
          transform='translate(2 15)'
          fill='#04285C'
        />
        <rect
          width='28'
          height='2'
          transform='translate(2 21)'
          fill='#04285C'
        />
      </svg>
    );
  };

  export const BurgerShown: VariableFC<'svg'> = ({ ...props }) => {
    return (
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <rect width='28' height='2' transform='translate(2 9)' fill='#04285C' />
        <rect
          width='20'
          height='2'
          transform='translate(2 15)'
          fill='#04285C'
        />
        <rect
          width='12'
          height='2'
          transform='translate(2 21)'
          fill='#04285C'
        />
      </svg>
    );
  };
}
