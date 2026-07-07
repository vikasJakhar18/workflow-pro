import React from "react";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">

      <section
        className="
          w-full min-h-screen
          md:min-h-fit md:max-w-2xl
          bg-[#1B1B1B]
          md:border md:border-white/10
          md:rounded-3xl
          px-6 py-12
          md:px-12 md:py-14
        "
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Create your account
          </h1>

          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Start managing your team today
          </p>
        </div>

        {/* Form */}
        <form className="mt-12 space-y-6">

          {/* Name */}
          <div>
            <label className="text-gray-300 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="
                mt-2
                w-full
                h-12
                rounded-xl
                border border-gray-700
                bg-black
                px-4
                text-white
                placeholder:text-gray-500
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-500/20
                outline-none
                transition-all
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="
                mt-2
                w-full
                h-12
                rounded-xl
                border border-gray-700
                bg-black
                px-4
                text-white
                placeholder:text-gray-500
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-500/20
                outline-none
                transition-all
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Confirm Password"
              className="
                mt-2
                w-full
                h-12
                rounded-xl
                focus:border-cyan-500
                focus:ring-2
                border border-gray-700
                bg-black
                px-4
                text-white
                placeholder:text-gray-500
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-500/20
                outline-none
                transition-all
              "
            />
          </div>

          {/* Button */}
          <button
            className="
              mt-2
              w-full
              h-12
              rounded-xl
              bg-cyan-500
              text-white
              font-semibold
              hover:bg-cyan-400
              hover:scale-[1.02]
              hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]
              active:scale-95
              transition-all
              duration-300
            "
          >
            Create Account
          </button>

          {/* Footer */}
          <div className="pt-2 text-center text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
            >
              Log in
            </a>
          </div>

        </form>
      </section>

    </div>
  );
};

export default SignupPage;