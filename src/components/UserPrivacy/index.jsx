import React, { useState } from "react";
import { connect } from "react-redux";
import { updatePassword } from "../../store/actions/user";
function UserPrivacy(props) {
  const [newPassword, setNewPasswordPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(props.user.isLoading);
  const [isError, setError] = useState(props.user.isError);
  const UpdateNewPassword = (event) => {
    event.preventDefault();
    const setDataUpdatePassword = { newPassword, confirmPassword };
    if (newPassword === "" || confirmPassword === "") {
      setError(true);
      setLoading(false);
    } else {
      props
        .updatePassword(setDataUpdatePassword)
        .then(() => {
          setLoading(true);
          setError(false);
          event.target.reset();
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }
  };
  return (
    <>
      <h5>
        Account and Privacy <hr className="my-4" />
      </h5>
      <form onSubmit={UpdateNewPassword}>
        <div>
          <div className="d-flex justify-content-between">
            {isError ? (
              <p className="text-danger fw-bold">Password Tidak Sama!</p>
            ) : null}
            {isLoading ? (
              <p className="text-success fw-bold">Password Berhasil diubah!</p>
            ) : null}
          </div>

          <div className="row">
            <div className="col-md-6">
              <label style={{ display: "block" }}>New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Write your password..."
                name="newPassword"
                onChange={(e) => setNewPasswordPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6 ">
              <label style={{ display: "block" }}>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password..."
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "20px", width: "300px" }}
        >
          Update changes
        </button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  updatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPrivacy);
