import Input from "../molecules/form/Input"
const UpdateProfile = ({handleUpdate, userData}) => {
  return (
    <form onSubmit={handleUpdate}>
            <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between items-center sm:items-end">
              <div className="text-gray-700 w-full sm:w-auto">
                <div>
                  <p>Nombre y apellido</p>
                  <Input
                    type="text"
                    name="fullname"
                    defaultValue={userData?.details?.fullname}
                  />
                </div>
                <div>
                  <p>Email</p>
                  <Input
                    type="email"
                    name="email"
                    defaultValue={userData?.email}
                  />
                </div>
                <div>
                  <p>Celular</p>
                  <Input
                    type="text"
                    name="cel"
                    defaultValue={userData?.details?.cel}
                  />
                </div>
                <div>
                  <p>Dirección</p>
                  <Input
                    type="text"
                    name="address"
                    defaultValue={userData?.details?.adress}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <button className="btn-disabled">Actualizar perfil</button>
              </div>
            </div>
          </form>
  )
}

export default UpdateProfile
