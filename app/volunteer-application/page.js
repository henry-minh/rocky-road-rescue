import FormCombo from '@/components/FormCombo';
import FormCheckbox from '@/components/FormCheckbox';
import FormPersonalInfo from '@/components/FormPersonalInfo';
import FormText from '@/components/FormText';
import FormTextArea from '@/components/FormTextArea';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export const metadata = {
    title: 'Volunteer Application',
    description: 'Rocky Road Rescue: Volunteer Application',
};
const useFacebookCombo = {
    title: 'Do you use Facebook?',
    options: [
        { id: 'facebook-yes', text: 'Yes' },
        { id: 'facebook-no', text: 'No' },
    ],
};
const haveCarCombo = {
    title: 'Do you have access to a vehicle?',
    options: [
        { id: 'vehicle-yes', text: 'Yes' },
        { id: 'vehicle-no', text: 'No' },
        { id: 'vehicle-sometimes', text: 'Sometimes' },
    ],
};

const bestContactCheckbox = {
    title: 'What is the best way to contact you? Please select all that apply.',
    options: [
        { id: 'best-contact-facebook', text: 'Facebook Message' },
        { id: 'best-contact-email', text: 'Email' },
        { id: 'best-contact-call', text: 'Phone Call' },
        { id: 'best-contact-text', text: 'Text Message' },
    ],
};

const volunteerTypeCheckbox = {
    title: 'What type of volunteering are you interested in? Please check all that apply.',
    options: [
        { id: 'volunteer-type-events', text: 'Volunteering at events' },
        { id: 'volunteer-type-washing-events', text: 'Dog washing at events' },
        { id: 'volunteer-type-nail-trimming', text: 'Nail trimming' },
        {
            id: 'volunteer-type-baking',
            text: 'Baking for events & fundraisers',
        },
        {
            id: 'volunteer-type-driving-dogs',
            text: 'Driving (Dogs) – e.g. Transporting dogs to and from the vet; taking dogs to and from adoption events',
        },
        {
            id: 'volunteer-type-driving-supplies',
            text: 'Driving (Supplies) – e.g. Donation pick up and drop off; taking items to foster families etc.',
        },
        {
            id: 'volunteer-type-dog-sitting',
            text: 'Dog sitting when foster families go out of town (usually a few days at a time)',
        },
        {
            id: 'volunteer-type-oranize-events',
            text: 'Helping organize and run fundraisers - eg. Bottle drives, online auctions, bake sales etc.',
        },
        {
            id: 'volunteer-type-photography',
            text: 'Photography (please state skill level in ‘other’ section below)',
        },
        { id: 'volunteer-type-fostering', text: 'Fostering' },
        { id: 'volunteer-type-other', text: 'Other (please specify below)' },
    ],
};

const locationCheckbox = {
    title: 'What type of volunteering are you interested in? Please check all that apply.',
    options: [
        { id: 'location-downtown-ottawa', text: 'Downtown Ottawa' },
        { id: 'location-kanata', text: 'Kanata' },
        { id: 'location-orleans', text: 'Orleans' },
        { id: 'location-nepean', text: 'Nepean' },
        { id: 'location-carleton-place', text: 'Carleton Place' },
        { id: 'location-smiths-falls', text: 'Smiths Falls' },
        { id: 'location-perth', text: 'Perth' },
        { id: 'location-almonte', text: 'Almonte' },
        { id: 'location-winchester', text: 'Winchester' },
        { id: 'location-other', text: 'Other (please specify below)' },
    ],
};
const commitCombo = {
    title: 'How long are you able to commit to volunteering for?',
    options: [
        { id: 'commit-once-or-twice', text: 'Just once or twice' },
        { id: 'commit-3-months', text: 'Up to 3 months' },
        { id: 'commit-6-months', text: 'Up to 6 months' },
        { id: 'commit-1-year', text: 'Up to 1 year' },
        { id: 'commit-ongoing', text: 'Ongoing' },
        { id: 'commit-other', text: 'Other (please specify below)' },
    ],
};
export default function VolunteerApplication() {
    return (
        <div className="mt-8 font-teko text-zinc-900">
            <div className="mx-auto mb-4 w-3/5  space-y-4 text-center  text-2xl ">
                <h1 className="text-4xl font-extrabold ">
                    Thank you for your interest in volunteering with Rocky Road
                    Rescue!
                </h1>
                <p>
                    Here at Rocky Road Rescue we are always looking to expand
                    our volunteer team and hear new and innovative ideas. If you
                    are keen to get involved, we&quot;d love to have you on
                    board! Please complete our Volunteer Application below and
                    someone from our Events & Fundraising Team will be in touch
                    shortly.
                </p>
                <p className="">
                    If you have any questions about volunteering, please email
                    us at events@rockyroadrescue.com. Click here to see what
                    positions we currently have available.
                </p>
            </div>
            <div className="mx-auto w-11/12 rounded-lg border border-blue-900 bg-[#f8fefee1] px-2 py-1 font-medium shadow-xl sm:w-10/12 md:w-3/5">
                <form>
                    <div className="my-2 border-b border-gray-900/10 pb-2 text-center ">
                        <h1 className=" text-4xl font-semibold  leading-7 text-sky-900 ">
                            Volunteer Application
                        </h1>
                    </div>

                    <div>
                        {/* Personal Details Section */}
                        <div className="border-b border-gray-900/10 pb-5">
                            <h2 className="text-3xl font-semibold leading-7 text-sky-900">
                                Personal Details
                            </h2>
                            <FormPersonalInfo></FormPersonalInfo>
                            <FormCombo
                                title={useFacebookCombo.title}
                                options={useFacebookCombo.options}
                            ></FormCombo>
                            <FormCombo
                                title={haveCarCombo.title}
                                options={haveCarCombo.options}
                            ></FormCombo>
                            <FormCheckbox
                                title={bestContactCheckbox.title}
                                options={bestContactCheckbox.options}
                            ></FormCheckbox>
                        </div>

                        {/*Volunteering Section*/}
                        <div className="space-y-4 border-b border-gray-900/10 pb-5">
                            <h2 className="text-3xl  font-semibold leading-7 text-sky-900">
                                Volunteering
                            </h2>
                            <FormText title="Is there a specific role that you are applying for? If yes, please state."></FormText>
                            <FormCheckbox
                                title={volunteerTypeCheckbox.title}
                                options={volunteerTypeCheckbox.options}
                            ></FormCheckbox>
                            <FormText title=' If you selected "other" to the above question, please specify here.'></FormText>
                            <FormCheckbox
                                title={locationCheckbox.title}
                                options={locationCheckbox.options}
                            ></FormCheckbox>
                            <FormText title=' If you selected "other" to the above question, please specify here.'></FormText>
                            <FormCombo
                                title={commitCombo.title}
                                options={commitCombo.options}
                            ></FormCombo>
                            <FormText title=' If you selected "other" to the above question, please specify here.'></FormText>
                            <FormText title=" What is your availability for volunteering? Eg. Weekends, Evenings, Tuesday mornings only, etc."></FormText>
                        </div>

                        {/*Experience Section*/}
                        <div className="border-b border-gray-900/10 ">
                            <h2 className="text-3xl font-semibold leading-7 text-sky-900">
                                Experience
                            </h2>
                            <p className="mt-1 text-lg leading-6 text-gray-600">
                                We&quot;ll always let you know about important
                                changes, but you pick what else you want to hear
                                about.
                            </p>
                            <div className="mt-4 space-y-4">
                                <FormTextArea title="Why would you like to volunteer with Rocky Road Rescue?"></FormTextArea>
                                <FormTextArea title="What skills, experience and knowledge do you have that would help your volunteer work? (Please give details)"></FormTextArea>
                                <FormTextArea title="Is there any other information you would like us to know?"></FormTextArea>
                                <FormTextArea title=" And finally... How did you hear about Rocky Road Rescue?"></FormTextArea>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
