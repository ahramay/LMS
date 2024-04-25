import Input from '@/components/ui/Input'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Button from '@/components/ui/Button'
import { Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import { LuAsterisk } from "react-icons/lu";
import appConfig from '@/configs/app.config'
import { PERSIST_STORE_NAME } from '@/constants/app.constant'
import deepParseJson from '@/utils/deepParseJson'
import Select from '@/components/ui/Select'

type FormikData = {
    billingAddress: string
    city: string
    apt:string
    state:string
    zipCode:string
}
const UpdateUserSchema = Yup.object().shape({
    billingAddress: Yup.string().min(3, 'address must be at least 3 characters').required('First Name is required'),
    apt: Yup.string().optional(),
    city: Yup.string().min(3, 'First Name must be at least 3 characters').required('Last Name is required'),
    zipCode: Yup.number().required('Zip Code is required'),
})

const optional = <span className="ml-1 opacity-60">(optional)</span>
const asterisk= <span><LuAsterisk color='red'/></span>

const EditUserBillingAddressForm = () => {

    const createFormData = (values: FormikData) => {
        const formData = new FormData();
        formData.append('billingAddress', values.billingAddress)
        formData.append('apt', values.apt)
        formData.append('city', values.city)
        formData.append('state', values.state)
        formData.append('zipCode', values.zipCode)
        return formData
    }
    const onComplete =  async(
        values: FormikData,
        setSubmitting: (isSubmitting: boolean) => void
    ) => {
        setSubmitting(true)
        const formData = createFormData(values);
        console.log("formData>>>>>",formData);
        try {
            const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME)
            const persistData = deepParseJson(rawPersistData)
            const accessToken = (persistData as any).auth.session.token
            const baseUrl = `${appConfig.baseUrl}/${appConfig.apiPrefix}`

        } catch (error) {
            console.log(error)
            setSubmitting(false)
        }

    }
    const courseInitialValues = () => ({
        billingAddress: '',
        city: '',
        apt:'',
        state:'',
        zipCode:''
    })

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    ...(courseInitialValues()),
                }}
                validationSchema={UpdateUserSchema}
                onSubmit={(values, { setSubmitting ,resetForm }) => {
                    onComplete(values, setSubmitting)
                    resetForm();
                }}
            >
                {({ values, touched, errors, isSubmitting }) => {
                    return (
                        <Form>
                            <FormContainer>
                                <div>
                                    <h4 className='py-2'>Billing Address :</h4>
                                    <div className='flex gap-0 justify-between flex-col sm:flex-row sm:gap-4'>
                                        <FormItem
                                            extra={asterisk}
                                            label="Billing Address"
                                            invalid={errors.billingAddress && touched.billingAddress}
                                            errorMessage={errors.billingAddress}
                                            className='w-full'
                                        >
                                            <Field
                                                autoComplete="off"
                                                name="billingAddress"
                                                component={Input}
                                                placeholder="Enter Address"
                                            />
                                        </FormItem>
                                        <FormItem
                                            label="Apt"
                                            extra={optional}
                                            className='w-full'
                                        >
                                            <Field
                                                autoComplete="off"
                                                name="apt"
                                                component={Input}
                                                placeholder="Enter Apt"
                                            />
                                        </FormItem>
                                        <FormItem
                                            extra={asterisk}
                                            label="City"
                                            invalid={errors.city && touched.city}
                                            errorMessage={errors.city}
                                            className='w-full'
                                        >
                                            <Field
                                                autoComplete="off"
                                                name="city"
                                                component={Input}
                                                placeholder="Enter city"
                                            />
                                        </FormItem>
                                    </div>
                                    <div className="flex gap-0 justify-between flex-col sm:flex-row sm:gap-4">
                                        <FormItem
                                            extra={asterisk}
                                            label="State"
                                            invalid={errors.state && touched.state}
                                            errorMessage={errors.state}
                                            className='w-full'
                                        >
                                            <Field
                                                autoComplete="off"
                                                name="state"
                                                placeholder="Select state"
                                                component={Select}
                                            />
                                        </FormItem>
                                        <FormItem
                                            extra={asterisk}
                                            label="Zip Code"
                                            invalid={errors.zipCode && touched.zipCode}
                                            errorMessage={errors.zipCode}
                                            className='w-full'
                                        >
                                            <Field
                                                autoComplete="off"
                                                name="zipCode"
                                                component={Input}
                                                placeholder="Enter Zip Code"
                                            />
                                        </FormItem>
                                    </div>
                                </div>
                                <div className="flex justify-start py-4">
                                    <Button
                                        loading={isSubmitting}
                                        variant="solid"
                                        type="submit"
                                    >
                                        Update
                                    </Button>
                                </div>
                            </FormContainer>
                        </Form>
                    )
                }}
            </Formik>
            
        </>
    )
}

export default EditUserBillingAddressForm
