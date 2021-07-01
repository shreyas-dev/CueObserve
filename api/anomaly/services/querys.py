from utils.apiResponse import ApiResponse
from access.data import Data


class Querys:
	"""
	Services for querying connection
	"""

	@staticmethod
	def runQuery(connectionType, connectionParams, query, limit=True):
		res = ApiResponse("Error in getting data")
		dataframe = Data.runQueryOnConnection(connectionType, connectionParams, query, limit)
		data = dataframe.to_dict("records")
		res.update(True, "Successfully retrieved data", data)
		return res
